import * as scriptLib from "../lib";

scriptLib.createService({
    "rootProcess": async () => {

        const path = await import("path");
        const child_process = await import("child_process");
        const util = await import("util");

        return {
            "pidfile_path": path.join(__dirname, "run" ,"pid"),
            "srv_name": "phony",
            "stop_timeout": 5678,
            "isQuiet": false,
            "assert_unix_user": "root",
            "daemon_count": 2,
            "doForwardDaemonStdout": true,
            "daemon_unix_user": "pi",
            "daemon_node_path": "/usr/bin/node",
            "daemon_cwd": "/home/pi",
            //"daemon_restart_after_crash_delay": -1,
            "preForkTask": async (terminateChildProcesses, daemon_number) => {

                const log: typeof console.log = (...args) => {
                    process.stdout.write(
                        Buffer.from(
                            scriptLib.colorize(`(root process custom, daemon_number: ${daemon_number}) ${util.format.apply(util, args)}\n`, "YELLOW"),
                            "utf8"
                        )
                    );
                };

                if( daemon_number === 1 ){
                    
                    await new Promise(resolve=>setTimeout(resolve, 2000));

                }

                while (true) {

                    const isSuccess = await new Promise<boolean>(resolve => {

                        log("preFork subprocess...");

                        const childProcess = child_process.exec("sleep 1 && (($RANDOM%3))", { "shell": "/bin/bash" });

                        childProcess.once("error", () => resolve(false))
                            .once("close", code => (code === 0) ? resolve(true) : resolve(false))
                            ;

                        terminateChildProcesses.impl = () => new Promise(resolve_ => {

                            resolve = () => {

                                log("preFork subprocess killed");

                                resolve_();

                            };

                            log("kill preFork");

                            childProcess.kill("SIGKILL");

                        });

                    });

                    if (isSuccess) {

                        log("preFork tasks complete!");

                        break;

                    } else {

                        log("Not yet ready to fork...");

                    }

                }

            }

        };

    },
    "daemonProcess": async (daemon_number, daemon_count) => {

        const os = await import("os");
        const util = await import("util");

        const log: typeof console.log = (...args) => {
            process.stdout.write(
                Buffer.from(
                    scriptLib.colorize(`(daemon process ${daemon_number}) ${util.format.apply(util, args)}\n`, "GREEN"),
                    "utf8"
                )
            );
        }

        return {
            "launch": async () => {

                let count= 10;

                while (count--) {

                    log("Grinding hard...", {
                        "daemon_count": daemon_count,
                        "pid": process.pid,
                        "user": os.userInfo().username,
                        "cwd": process.cwd(),
                        "argv": process.argv
                    });

                    await new Promise(resolve => setTimeout(resolve, 2000));

                    if( daemon_number === 1 && count === 5 ){

                        log("Terminating daemon process 1");

                        process.emit("beforeExit", process.exitCode = 0);

                    }

                }

                log("Terminating daemon process 2");

                process.emit("beforeExit", process.exitCode = 0);

            },
            "beforeExitTask": async error => {

                /*
                log("Hanging in before exit task");

                await new Promise(resolve=>{});
                */

                if (!!error) {

                    log("Exiting because of an error:", error);

                } else {

                    log("Not exiting because of exception");

                }

                log("Performing phony cleanup task...");

                await new Promise(resolve => setTimeout(resolve, 800));

                log("before exit completed successfully!");

            }
        };

    }
});
