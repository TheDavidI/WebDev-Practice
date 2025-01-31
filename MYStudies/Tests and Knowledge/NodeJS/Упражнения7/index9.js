function greet(name) {
    console.log(`Hello ${name}`);
};

function greetDavid(greetFn) {
    const name = "David";
    greetFn(name);
};

greetDavid(greet);