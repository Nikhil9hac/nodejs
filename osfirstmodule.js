const os=require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
let freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);
let totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
console.log(os.tmpdir());