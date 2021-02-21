
const EventEmitter=require('events')
const event =new EventEmitter();
// event.on('say my name',()=>{
//     console.log('nikhil');
// })
// event.emit('say my name')

// event listeners with  argument
event.on('checkpage',(a,b)=>{
    console.log(a,b);
})
event.emit('checkpage',200,true);