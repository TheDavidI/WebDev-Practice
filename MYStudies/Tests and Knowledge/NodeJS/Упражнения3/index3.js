const Master = require("./Master");
console.log(Master.getName());
Master.setName("Thor");
console.log(Master.getName());

const newMaster = require("./Master");
console.log(newMaster.getName());