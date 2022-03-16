const os =require("os");
console.log("total memory:", os.totalmem());
console.log("total memory in GB:", os.totalmem()/1024/1024/1024);
console.log("free memory in GB:", os.freemem()/1024/1024/1024);
console.log("OS version:", os.version());
console.log("CPU:", os.cpus());