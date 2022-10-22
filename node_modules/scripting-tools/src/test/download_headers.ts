import * as scriptLib from "../lib";

const firmware_release = scriptLib.execSync("zcat /usr/share/doc/raspberrypi-bootloader/changelog.Debian.gz | head")
    .match(/^[^r]*raspberrypi-firmware\ \(([^\)]+)\)/)![1]
    ;

const url = [
    "https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/",
    `raspberrypi-kernel-headers_${firmware_release}_armhf.deb`
].join("");

console.log(url);

(async ()=>{

    while( true ){

        await scriptLib.web_get(url, "/tmp/headers.deb");

        console.log("PASS...");

    }

})();