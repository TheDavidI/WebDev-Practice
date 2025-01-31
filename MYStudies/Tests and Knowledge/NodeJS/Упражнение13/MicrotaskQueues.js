//експеримент 3
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => 
        console.log("this is the inner next tick inside next tick")
    );
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("thsi is promise.resolve 2");
    process.nextTick(() => 
        console.log("this is the inner next tick inside Promise then block")
    );
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));


//експеримент 2
//Promise.resolve().then(() => console.log("this is promise.resove 1"));
//process.nextTick(() => console.log("this is process. nextTick 1"));


//експеримент 1
//console.log("console.log 1");
//process.nextTick(() => console.log("this is process.next 1"));
//console.log("console.log 2");