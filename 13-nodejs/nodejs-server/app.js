var myLogModule = require('./Log');
myLogModule.info('Node.js Started');

// var person = require('./data');
// console.log(`${person.firstName} ${person.lastName}`);

var Person = require('./Person');
var person1 = new Person('Juan', 'Dela Cruz');
console.log(person1.fullName());
