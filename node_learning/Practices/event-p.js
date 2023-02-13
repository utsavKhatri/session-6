import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on('someEvent', (msg)=>{
    console.log(msg);
})

myEmitter.emit('someEvent','the event was occur');

