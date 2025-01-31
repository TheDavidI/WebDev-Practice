const rectangle = require("./rectangle1")

const width = 5;
const height = 4;

const Area = rectangle.calculateArea(width, height);
const Perimeter = rectangle.calculatePerimeter(width, height);

console.log(`това е площта ${Area}.`);
console.log(`това е обиколката ${Perimeter}.`);