import * as scriptLib from "../lib";
import * as child_process from "child_process";

switch (process.argv[2]) {
    case "A":
        (() => {

            console.log(`( A ) pid: ${process.pid}, forking 2 B processes`);

            const p1 = child_process.fork(__filename, ["B"], { "silent": true });

            p1.stdout.on("data", data => console.log(`${data}`));

            console.log(`( A ) subprocess 1 pid is: ${p1.pid}`);

            const p2 = child_process.fork(__filename, ["B"], { "silent": true });

            p2.stdout.on("data", data => console.log(`${data}`));

            console.log(`( A ) subprocess 2 pid is: ${p2.pid}`);

        })();
        break;
    case "B":
        (async () => {

            console.log(`( B ) pid: ${process.pid}`);

            while (true) {

                await new Promise(resolve => setTimeout(resolve, 30000));

            }

        })();
        break;
    default:
        (async () => {

            console.log(`( root ) pid: ${process.pid}, forking A and B process.`);

            const p1 = child_process.fork(__filename, ["A"], { "silent": true });

            p1.stdout.on("data", data => console.log(`${data}`));

            console.log(`( root ) subprocess 1 (A) pid is: ${p1.pid}`);

            const p2 = child_process.fork(__filename, ["B"], { "silent": true });

            p2.stdout.on("data", data => console.log(`${data}`));

            console.log(`( root ) subprocess 2 (B) pid is: ${p2.pid}`);

            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log("Before stop own sub processes:");
            scriptLib.stopProcessSync._printProcessTree();

            scriptLib.stopProcessSync.log = console.log.bind(console);
            scriptLib.stopProcessSync.stopSubProcessesAsapSync();

            console.log("After stop own sub processes (same loop)");
            scriptLib.stopProcessSync._printProcessTree();

            console.log("DONE");

        })();

}
