const fs=require('fs');
// fs.mkdir('challenge-2',(err)=>{
//    if (err) {
//         console.log(err);
//    }
// })
// let data=`hello bro this is asynchronous type function`
// fs.writeFile('challenge-2/bio.txt',data,(err)=>{
//    if (err) {
//         console.log(err);
//    }
// })
// fs.readFile('challenge-2/bio.txt',"utf-8",(err,data)=>{
//     if (err) {
//         console.log(data);
//     }
// })
// fs.rename('challenge-2/bio.txt','challenge-2/new.txt',(err)=>{
//     console.log(err);
// })
// let data1=`appending new file`;
// fs.appendFile('challenge-2/new.txt',data1,(err)=>{
//     console.log(err);
// })
// fs.unlink('challenge-2/new.txt',(err)=>{
//     console.log(err);
// })
fs.rmdir('challenge-2',(err)=>{
    console.log(err);
})