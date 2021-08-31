// Sychronous
const fs = require('fs');
const data = fs.readFileSync('quotes.txt');
console.log(data.toString());
console.log('Program ended.');
