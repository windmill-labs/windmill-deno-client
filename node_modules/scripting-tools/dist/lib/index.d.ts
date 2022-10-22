/// <reference types="node" />
import * as child_process from "child_process";
/**
 * After this function is called every call to execSync
 * or exec will print the unix commands being executed.
 * */
export declare function enableCmdTrace(): void;
export declare function get_uid(unix_user: string): number;
export declare function get_gid(unix_user: string): number;
export declare function colorize(str: string, color: "GREEN" | "RED" | "YELLOW"): string;
/**
 *
 * The stderr is forwarded to the console realtime.
 *
 * The returned value is the concatenated data received on stdout.
 *
 * If the return code of the cmd is not 0 an exception is thrown
 * and the message cmd + the concatenated data received on stderr.
 *
 * If enableTrace() have been called the command called will be printed.
 *
 */
export declare function execSync(cmd: string, options?: child_process.ExecSyncOptions): string;
/**
 *
 * The cmd is printed before execution
 * stdout and stderr are forwarded to the console realtime.
 * Return nothing.
 *
 * stdio is set to "inherit" and thus should not be redefined.
 *
 */
export declare function execSyncTrace(cmd: string, options?: child_process.ExecSyncOptions): void;
/**
 *
 * Like execSync but stderr is not forwarded.
 * WARNING: If mean that when the cmd return 0
 * all data that may have been wrote on stderr
 * are lost into oblivion.
 *
 * stdio is set to "pipe" and thus should not be redefined.
 *
 */
export declare function execSyncQuiet(cmd: string, options?: child_process.ExecSyncOptions): string;
/** Same as execSync but async */
export declare function exec(cmd: string, options?: child_process.ExecOptions): Promise<string>;
/**
 * Spawn a process that continue running after current process exit.
 * This process will be ignored by stopSubProcessesAsapSync.
 * If a logfile_path if provided stdout and stderr will be redirected to this file.
 *
 * detached, and stdio options should not be set as they are set internally.
 * */
export declare function spawnAndDetach(command: string, args?: ReadonlyArray<string>, options?: child_process.SpawnOptions, logfile_path?: string): child_process.ChildProcess;
/**
 *
 * Print a message and enable a moving loading bar.
 * WARNING: Nothing should be printed to stdout until we stop showing the moving loading.
 *
 * returns:
 * -exec: A proxy to the exec fnc that will call onError before it throw the error.
 * -onSuccess: Stop showing the moving loading and pretty print a success message ("ok" by default)
 * -onError: Stop showing the moving loading and pretty print error message.
 *
 */
export declare function start_long_running_process(message: string): {
    exec: typeof exec;
    onSuccess(message?: string): void;
    onError(errorMessage: string): void;
};
/**
 * Apt package if not already installed,
 * if prog is provided and prog is in the PATH the package will not be installed
 * */
export declare function apt_get_install_if_missing(package_name: string, prog?: string): Promise<void>;
export declare namespace apt_get_install_if_missing {
    function isPkgInstalled(package_name: string): boolean;
    function doesHaveProg(prog: string): boolean;
}
/** Install or upgrade package via APT */
export declare function apt_get_install(package_name: string): Promise<void>;
export declare namespace apt_get_install {
    let isFirst: boolean;
    function record_installed_package(file_json_path: string, package_name: string): void;
    let onError: (error: Error) => never;
    let onInstallSuccess: (package_name: string) => void;
}
export declare function exit_if_not_root(): void;
/**
 *
 * Locate a given module in a node_modules directory.
 * If the module is required in different version and thus
 * present multiple times will be returned the shorter path.
 * This ensure that if a given module is in package.json 's dependencies
 * section the returned path will be the one we looking for.
 *
 * @param module_name The name of the module.
 * @param module_dir_path Path to the root of the module ( will search in ./node_modules ).
 *
 * Throw if the module is not found.
 *
 */
export declare function find_module_path(module_name: string, module_dir_path: string): string;
/**
 *
 * Test if two file of folder are same.
 * Does not consider stat ( ownership and permission ).
 * transparent handling of symlinks.
 *
 * Example
 *
 * /foo1/bar/file.txt
 * /foo2/bar/file.txt
 *
 * to compare the two version of file.txt
 * call with "/foo1", "/foo2", "./bar/file.txt";
 * or with "/foo1/bar/file.txt", "/foo2/bar/file.txt"
 *
 * @param relative_from_path1 absolute path ex: '/foo1'
 * @param relative_from_path2 absolute path ex: '/foo2'
 * @param relative_to_path relative path ex: './bar/file.txt" or 'bar/file.txt'
 * for convenience relative_to_path can be absolute as long as it has relative_from_path1
 * or relative_from_path2 as parent.
 *
 */
export declare function fs_areSame(relative_from_path1: string, relative_from_path2: string, relative_to_path?: string): boolean;
export declare namespace fs_areSame {
    function get_relative_to_path(dir_path1: string, dir_path2: string, to_path: string): string;
}
/**
 *
 * Move or copy file of folder.
 * -If dest is identical to source nothing is copied nor moved.
 * -If dest exist and is different of source it will be deleted prior to proceeding with action.
 * -In move mode if dest identical to source source will be removed.
 * -When copy is effectively performed the stat are conserved.
 * -If dirname of dest does not exist in fs, it will be created.
 * -Unlike cp or mv "/src/file.txt" "/dest" will NOT place file.txt in dest but dest will become file.txt
 *
 * calling [action] "/src/foo" "/dst/foo" is equivalent
 * to calling [action] "/src" "/dst" "./foo" ( or "foo" )
 * or [action] "/src" "/dst" "src/foo"
 * or [action] "/src" "/dst" "dst/foo"
 *
 */
export declare function fs_move(action: "COPY" | "MOVE", relative_from_path_src: string, relative_from_path_dest: string, relative_to_path?: string): void;
/**
 * Download and extract a tarball. throws web_get.DownloadError and Error
 *
 * Example
 *
 * website.com/rel.tar.gz
 * ./file1.txt
 * ./dir/file2.txt
 *
 * /foo/
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "MERGE" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "OVERWRITE IF EXIST" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./dir/file2.txt
 *
 */
export declare function download_and_extract_tarball(url: string, dest_dir_path: string, mode: "MERGE" | "OVERWRITE IF EXIST"): Promise<void>;
/** 10s of inactivity will trigger timeout, throws DownloadError only */
export declare function web_get(url: string, file_path: string): Promise<void>;
export declare function web_get(url: string): Promise<string>;
export declare namespace web_get {
    class DownloadError extends Error {
        readonly url: string;
        readonly cause: "CONNECTION ERROR" | "INCOMPLETE" | "HTTP ERROR CODE";
        constructor(url: string, cause: "CONNECTION ERROR" | "INCOMPLETE" | "HTTP ERROR CODE", message: string);
    }
    class DownloadErrorIncomplete extends DownloadError {
        readonly contentLength: number | undefined;
        readonly receivedBytes: number;
        constructor(url: string, contentLength: number | undefined, receivedBytes: number, info?: string);
    }
    class DownloadErrorHttpErrorCode extends DownloadError {
        readonly code: number;
        constructor(url: string, code: number);
    }
}
export declare function fs_ls(dir_path: string, mode?: "FILENAME" | "ABSOLUTE PATH", showHidden?: boolean): string[];
/**
 *
 * Create a symbolic link.
 * If dst exist it is removed.
 * directories leading to dest are created if necessary.
 *
 */
export declare function createSymlink(src_path: string, dst_path: string): void;
/** Create a executable file */
export declare function createScript(file_path: string, content: string): void;
export declare namespace unixUser {
    function create(unix_user: string, home_dir_path?: string): void;
    function remove(unix_user: string): void;
}
export { get_caller_file_path } from "./get_caller_file_path";
/**
 *
 * DO NOT USE TEST PURPOSE ONLY
 *
 * return __filename
 *
 */
export declare function get__filename(): string;
/**
 *
 * Equivalent to the pattern $() in bash.
 * Strip final LF if present.
 * If cmd fail no error is thrown, an empty string is returned.
 * Does not print to stdout.
 *
 * Typical usage: uname -r or which pkill
 *
 */
export declare function sh_eval(cmd: string): string;
/**
 * Run a command and return true if the return code was 0.
 * Does not print to stdout.
 */
export declare function sh_if(cmd: string): boolean;
/**
 * Return a promise that resolve as the source promise when fulfilled
 * or resolve with the error when reject.
 * If a timeout is specified the returned promise resolve with an error after [timeout]ms
 * if the source promise did not completed before.
 * The message of the timeout error is safePr.timeoutErrorMessage
 */
export declare function safePr<T>(pr: Promise<T>, timeout?: number): Promise<T | Error>;
export declare namespace safePr {
    const timeoutErrorMessage = "safePr timeout";
}
/**
 *
 * Allow to schedule action function to perform before exiting.
 *
 * The task function will always be called before the process stop
 * unless process.exit is explicitly called somewhere or
 * if the process receive any signal other than the ones specified
 * in the ExitCause.Signal["signal"] type.
 *
 * The process may stop for tree reasons:
 * 1) If there is no more work scheduled ( natural termination ).
 * 2) If an uncaught exception it thrown ( or a unhandled promise rejection )
 * 3) If a signal ( one of the handled ) is sent to the process.
 *
 * To manually exit the process there is two option:
 * - Call process.exit(X) but the task function will not be called.
 * - Emit "beforeExit" on process object ( process.emit("beforeExit, process.exitCode= X) );
 *  Doing so you simulate 1st stop condition ( natural termination ).
 *
 * To define the return code set process.exitCode. The exit code can be set
 * before emitting "beforeExit" or in the task function.
 * If exitCode has not be defined the process will exit with 0 if
 * there was nothing else to do and 1 otherwise.
 *
 * The task function can be synchronous or asynchronous.
 * The task function has [timeout] ms to complete.
 * If it has not completed within this delay the process will
 * be terminated anyway. (Default 4000 ms )
 * Setting [timeout] to a negative value will disable the timer.
 * WARNING: It is important not to perform sync operation that can
 * hang for a long time in the task function ( e.g. execSync("sleep 1000"); )
 * because while the sync operation are performed the timeout can't be triggered.
 *
 * As soon as the task function is called all the other exitCause that
 * may auccur will be ignored so that the task function have time to complete.
 * Anyway the task function is called only once.
 *
 * Whether the task function complete by successfully or throw
 * an exception the process will terminate with exit code set
 * in process.exitCode at the time of the completion.
 *
 * Provide shouldExitIf function to filter what should be
 * considered a case to terminate the process.
 * Only exception and supported signals can be bypassed,
 * Nothing else to do will always terminate the process.
 * By default exiting on any signal or uncaught errors.
 *
 * Before exiting all subprocess will be killed.
 *
 *
 */
export declare function setProcessExitHandler(task: (exitCause: setProcessExitHandler.ExitCause) => any, timeout?: number, shouldExitIf?: (exitCause: Exclude<setProcessExitHandler.ExitCause, setProcessExitHandler.ExitCause.NothingElseToDo>) => boolean): void;
export declare namespace setProcessExitHandler {
    type ExitCause = ExitCause.Signal | ExitCause.Exception | ExitCause.NothingElseToDo;
    namespace ExitCause {
        type Signal = {
            type: "SIGNAL";
            signal: keyof typeof Signal._obj;
        };
        namespace Signal {
            const _obj: {
                "SIGINT": null;
                "SIGUSR2": null;
                "SIGHUP": null;
            };
            const list: Signal["signal"][];
        }
        type Exception = {
            type: "EXCEPTION";
            error: Error;
        };
        type NothingElseToDo = {
            type: "NOTHING ELSE TO DO";
        };
    }
    let log: typeof console.log;
}
/**
 *
 * Stop a process by sending a specific signal to a target process.
 * When the function return the main process and all it's descendent processes are terminated.
 *
 * The default signal is SIGUSR2 which is the signal used to gracefully terminate
 * Process created by the createService function.
 *
 * Optionally runfiles_path can be provided to define a set of files
 * that should be suppressed before returning.
 *
 * If pid is provided under the form of a pidfile path it will
 * be added to the runfiles set.
 *
 * If all the processes does not terminate within [delay_before_sigkill]ms
 * (default 50000) then KILL signal will be sent to all processes still alive.
 *
 * If the PID provided is the same that the PID of the process running the function
 * PidMatchCurrentProcessError will be thrown.
 *
 */
export declare function stopProcessSync(pidfile_path_or_pid: string | number, signal?: NodeJS.Signals, delay_before_sigkill?: number, runfiles_path?: string[]): void;
export declare namespace stopProcessSync {
    class PidMatchCurrentProcessError extends Error {
        readonly cleanupRunfiles: () => void;
        constructor(cleanupRunfiles: () => void);
    }
    /**
     * Stopping process As Soon As Possible,
     * stopProcessSync with signal SIGKILL and timeout 0
     * */
    function stopProcessAsapSync(pidfile_path_or_pid: string | number, runfiles_path?: string[]): void;
    /**
     * Terminate all child process of current process ASAP.
     *
     * NOTE: Directly after this function ( in the current tick )
     * direct parents process that had sub processes will be Zombies.
     * However they will be reaped by the current process on next tick.
     *
     */
    function stopSubProcessesAsapSync(): void;
    namespace stopSubProcessesAsapSync {
        const ignorePids: Set<number>;
    }
    /** Invoke kill, can't throw */
    function kill(pid: number, signal: NodeJS.Signals): void;
    /**
     * Get the list of subprocess of a process ( return a list of pid )
     */
    function getSubProcesses(pid: number, depth: "FULL PROCESS TREE" | "DIRECT SUB PROCESSES ONLY"): number[];
    /** Return true only if exist and is not a daemon */
    function isProcessRunning(pid: number): boolean;
    /** Debug function to print the process tree of the current process. */
    function _printProcessTree(log?: typeof console.log): void;
    let log: typeof console.log;
}
/**
 *
 * Function to create the entry point (main.js) of a node service that can:
 * -Restart on crash (without relying on systemd to do so).
 * -Execute as specific unix user but can perform tasks as root before start.
 * -Be stopped gracefully by sending USR2 signal on the root process ( identified by pidfile ).
 * -Be started via a shell and gracefully stopped with CTRL-C (INT signal).
 * -Ensure only one instance of the service run at the same time.
 *      ( if at the time the main is called there is an other instance of the service
 *      running it is gracefully terminated )
 * -Ensure that the process will terminate in at most [ stop_timeout ] ms after
 *      receiving INT or USR2 signal. (default 5second)
 * -Forward daemon processes stdout to root process stdout.
 * -Can fork multiple daemon process.
 *
 * The root process forward command line arguments and environnement variable to
 * the daemon processes.
 *
 * => rootProcess function should return ( when not default ):
 * -pidfile_path: where to store the pid of the root process.
 *      take to terminate after requested to exit gracefully.
 * -srv_name: Name of the service to overwrite the process names. (Default: not overwriting)
 * -stop_timeout: The maximum amount of time ( in ms ) the
 *      that beforeExitTask can take to complete before being killed by force by root process.
 *      After receiving USR2 signal or CTRL, the root process will be closed within [trop_timeout]+1000ms
 * -assert_unix_user: enforce that the main be called by a specific user.
 * -isQuiet?: set to true to disable process debug info logging on stdout. Prefixed by [ service ]. ( default false )
 * -doForwardDaemonStdout?: set to true to forward everything the daemon
 *      process write to stdout to the root process stdout. ( default true )
 * -daemon_unix_user?: User who should own the daemon process.
 * -daemon_node_path?: Node.js executable that should be used to by the daemon process.
 * -daemon_cwd?: working directory of the daemon process.
 * -daemon_restart_after_crash_delay?: ( Default to 500ms. )Delay in ms before restarting the daemon
 *      after it terminate without being requested to. If set to a negative number the daemons
 *      will not be restarted after it terminate for the first time and :
 *      If all daemons process exited with 0 and there is no other daemon process the root process
 *      will end with a clean exit code.
 *      If any of the daemon exit with an unclean code the root process will be terminated with an error code
 *      even if there is some other daemon running.
 * -daemon_count: Number of instance of daemon process that should be forked, default 1.
 * -max_consecutive_restart: Number of time a daemon should be restarted after crashing right after start.
 *      (Default ~Infinity).
 * -preForkTask: Task to perform before forking a daemon process.
 *      It is called just before forking the daemon process. ( called again on every restart. )
 *      If the function is async the daemon will not be forked until the returned promise resolve.
 *      If the function throw exception root process will exit with code 1.
 *      (pidfile will be deleted)
 *      If the function is async and if it need to spawn child processes then
 *      an implementation for terminateSubProcess ( passed as reference ) should be provided so that
 *      if when called it kill all the child processes then resolve once they are terminated.
 *      The to which the promise resolve will be used as exit code for the root process.
 *      Note that terminateSubProcess should never be called, it is a OUT parameter.
 *      However if the implementation provided is just to send a SIGKILL to the forked processes
 *      then there is no need to provide an implementation as all the root process's sub processes tree
 *      will be killed before exiting anyway.
 *
 * => daemonProcess
 * It should return:
 * -launch: the function that the daemon process need to call to start the actual job that the service is meant to perform.
 * -beforeExitTask: function that should be called before the daemon process exit. ( e.g. creating crash report ).
 *      If the daemon process is terminating due to an error the error will be passed as argument.
 *      There is two scenario that will led to this function NOT being called:
 *      1)The daemon process receive KILL or other deadly signal that can't be overridden.
 *      2)The root process terminate.
 * daemon_number represent the instance index of the daemon among the total of [damon_count] process forked.
 * It can be user to use a different logfile for each daemon process instance.
 *
 * NOTE: If the root process receive a deadly signal other than INT, USR2 or HUP
 * ( e.g. KILL or STOP ) the root and daemon processes will immediately terminate without
 * executing beforeExit tasks or removing pidfile.
 *
 * NOTE: because setting listener on "message" and "disconnect" process event prevent the
 * thread from terminating naturally where is nothing more to do if you wish to manually
 * terminate the daemon process without termination being requested from the parent you can:
 *        1) emit "beforeExit" on process setting the desired exit code ( process.emit("beforeExit", process.exitCode= X);
 *        2) throw an exception.
 *
 */
export declare function createService(params: {
    rootProcess(): Promise<{
        pidfile_path: string;
        srv_name?: string;
        stop_timeout?: number;
        assert_unix_user?: string;
        isQuiet?: boolean;
        doForwardDaemonStdout?: boolean;
        daemon_unix_user?: string;
        daemon_node_path?: string;
        daemon_cwd?: string;
        daemon_restart_after_crash_delay?: number;
        daemon_count?: number;
        max_consecutive_restart?: number;
        preForkTask?: (terminateChildProcesses: {
            impl: () => Promise<void>;
        }, daemon_number: number) => Promise<void> | void;
    }>;
    daemonProcess(daemon_number: number, daemon_count: number): Promise<{
        launch: () => any;
        beforeExitTask?: (error: Error | undefined) => Promise<void> | void;
    }>;
}): void;
export declare namespace systemd {
    /**
     * Generate a systemd config file for a service created via "createService" function
     * enable by default, start by default.
     */
    function createConfigFile(srv_name: string, main_js_path: string, node_path?: string, enable?: "ENABLE" | false, start?: "START" | false): void;
    /** Remove config file disable and reload daemon, never throw, stop is false by default */
    function deleteConfigFile(srv_name: string, stop?: false | "STOP"): void;
}
