const names=require('./2-firstModule.js');
const functions=require('./2-secondModule.js');
console.log("the properties we find in the names is this");
console.log(names);
console.log("the properties we find in the functions are this");
console.log(functions);
functions.sayName(names.name);
functions.sayHI();
require('./2-thirdModule.js');
