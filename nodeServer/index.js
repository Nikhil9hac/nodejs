// old method wuthoustreaming
// const http=require('http');
// // console.log(url);
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     if (req.url=='/') {
//         res.end('hello from other world')
//     }
//     else if(req.url=="/about"){
//         res.end('this is about page')
//     }
//     else if(req.url=="/service"){
//         res.end('this is nikhil services')
//     }
//     else if(req.url=="/contact"){
//         res.end('this is nikhil conatct')
//     }
// })
// server.listen(8000,'127.0.0.1'),()=>{
//     console.log('lstening');
// }

// using streaming

const http=require('http');
const fs=require('fs');
const server=http.createServer();
server.on('request',(req,res)=>{
    // long route
    const rStream=fs.createReadStream('stream');
    rStream.pipe(res);
    // rStream.on('data',(chunk)=>{
    //     res.write(chunk);
    // })
    // rStream.on('end',(chunk)=>{
    //     res.end();
    // })
    // rStream.on('error',(chunk)=>{
    //     res.end('file not found')
    // })
    // res.end('hello from other side')

})
server.listen(8000,'127.0.0.1');