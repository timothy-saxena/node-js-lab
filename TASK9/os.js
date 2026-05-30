/* import os from "os";
let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    freemem: (os.freemem() / 1024 ** 3).toFixed(2) + ` GB`,
};
console.log("Details of OS");
console.log(currentOS);
 */

import os from "os";

let myOS = {
    type: os.type(),
    arch: os.arch(),
    release: os.release(),
    freemem: os.freemem() / 1024 ** 3 + "GB",
};
console.log(myOS);
