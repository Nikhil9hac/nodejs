const fs=require('fs');
const data='nikhil is good boy'
fs.writeFile('nikhil.txt',data,(error)=>{
    if (error) {
        console.log(error);
    }
})
fs.readFile('nikhil.txt',"utf-8",(error,data)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
const data1=' nikhil is again come';
fs.appendFile('nikhil.txt',data1,(error)=>{
    if (error) {
        console.log(error);
    }
})
fs.unlink('nikhil.txt',(error)=>{

})