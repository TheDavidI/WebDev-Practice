const eventemitter = require("node:events");

class PizzaShop extends eventemitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(serialize, topping) {
        this.orderNumber++;
        this.emit("order", serialize, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
};

module.exports = PizzaShop; 