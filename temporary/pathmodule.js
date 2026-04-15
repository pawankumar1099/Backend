// const crypto = require('crypto');
// const content = "pass123"
// const bef = Date.now();


// for(let i=0;i<100;i++){
//     // crypto.pbkdf2Sync(content,"salt",100000,512,"sha512")
//     crypto.pbkdf2(content,"salt",100000,512,"sha512",(err, ans)=>{
   
    
// })
// }
// console.log(Date.now()-bef);

const events = require('events')
const eventHandler =() =>{
    console.log("Event Handler Executed Successfully:");
    
}
const EventEmitter = new events.EventEmitter;

EventEmitter.on('order_pizza',()=>{
    console.log('Order received');
    
})

EventEmitter.emit("order_pizza")

