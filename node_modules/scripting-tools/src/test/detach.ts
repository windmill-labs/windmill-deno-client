import * as scriptLib from "../lib";

const script_path = "/tmp/foo_bar.sh";

scriptLib.createScript(script_path, [
    `#!/bin/bash`,
    ``,
    ...(new Array(500)).fill("").map(()=> `echo up && sleep 2`),
    ``
].join("\n"));

scriptLib.stopProcessSync._printProcessTree();

scriptLib.spawnAndDetach("/bin/bash", [ script_path ], undefined, "/tmp/foo_bar.log");

scriptLib.stopProcessSync._printProcessTree();

setTimeout(()=>{

    console.log("Stop sub process now");

    scriptLib.stopProcessSync.log= console.log.bind(console);

    scriptLib.stopProcessSync.stopSubProcessesAsapSync();

    console.log("Exit now");

    process.exit(0);

}, 20000);


