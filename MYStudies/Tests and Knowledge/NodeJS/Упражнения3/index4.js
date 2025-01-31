const Master1 = require("./Master1");

const chief = new Master1 ("Chief");
console.log(chief.getName());
chief.setName("John 117");
console.log(chief.getName());

const thor = new Master1("Thor");
console.log(thor.getName());
