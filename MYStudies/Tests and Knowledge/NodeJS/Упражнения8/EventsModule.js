const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size, topping) => {
    if (size === "large"){
        console.log("Serving a big Coke without sugar");
    }
    else {
        console.log("Serving a small Coke with sugar");
    } 
});

console.log("Do work before event occurs in the system");
emitter.emit("order-pizza", "large", "cheese");