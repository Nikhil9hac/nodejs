const add=(a,b)=>{
    console.log(a+b);
}
const sub=(a,b)=>{
    console.log(a-b);
}
const mult=(a,b)=>{
    console.log(a*b);
}
const divd=(a,b)=>{
    console.log(a/b);
}
const rem=(a,b)=>{
    console.log(a%b);
}
// module.exports=add;  if one function have to passed
// module.exports.add=add;
module.exports={add,sub,mult,divd,rem};

// please go to create js folder to checck in bult module thak you and have a nice day