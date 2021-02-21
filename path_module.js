const path=require('path');
console.log(path.dirname("C:/Users/sanjeev/Downloads/Documents/node js/nikhil.txt"));
console.log(path.extname('C:/Users/sanjeev/Downloads/Documents/node js/nikhil.txt'));
console.log(path.basename('C:/Users/sanjeev/Downloads/Documents/node js/nikhil.txt')); 
let myPath=path.parse("C:/Users/sanjeev/Downloads/Documents/node js/nikhil.txt");
console.log(myPath.name)
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.ext);