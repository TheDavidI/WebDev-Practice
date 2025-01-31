function calculateArea(width, height) {
    return width * height;
}

function calculatePerimeter(width, height) {
    return 2 * (width + height);
}
module.exports = {
    calculateArea,
    calculatePerimeter
};