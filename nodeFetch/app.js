const http=require('http');
const fs=require('fs');
const request=require('requests');

const homeFile=fs.readFileSync('index.html','utf-8');
const server=http.createServer();
const replaceVal=(tempVal,orgData)=>{
    let temperature=tempVal.replace('{%tempVal%}',orgData.main.temp);
    temperature=temperature.replace('{%tempMin%}',orgData.main.temp_min);
    temperature=temperature.replace('{%tempMax%}',orgData.main.temp_max);
    return temperature
}
server.on('request',(req,res)=>{
    if (req.url=="/") {
        request('http://api.openweathermap.org/data/2.5/weather?q=Bihar&appid=1f85633f522afbfbd38645d120f80841')
        .on('data',(chunk)=>{
            let objData=JSON.parse(chunk);
            const arrData=[objData];
            const realTime=arrData.map((val)=>replaceVal(homeFile,val)).join('');
            res.write(realTime)
           })
        .on("end",(chunk)=>{
            res.end()
        });
    } else {
        res.end('file not found')
    }
})
server.listen(8000,'127.0.0.1');
