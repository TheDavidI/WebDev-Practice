//setImmediate(() => console.log("this is setImmediate"));
//setImmediate(() => {
    //console.log("this is setImmidiate 2");
    //process.nextTick(() => console.log("this is process.nextTick 1"));
   // Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
//});
//setImmediate(() => console.log("this is setImmidiate 3"));



setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
//това прави винаги setTimeout да е първо
for (let i = 0; i < 2000000000; i++) {}