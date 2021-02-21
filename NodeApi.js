const fs=require('fs');
let myBioData={
    name:'nikhil',
    age:"13",
    collegeAim:"MIT",
    habit(){
        console.log("this is my hobby like coding and studying or some little game");
    }
}
myBioData=JSON.stringify(myBioData);
fs.writeFile('js.json',myBioData,(err)=>{
    console.log(err);
})
fs.readFile('js.json','utf-8',(err,data)=>{
    const orgData=JSON.parse(data);
   console.log(orgData);
})

