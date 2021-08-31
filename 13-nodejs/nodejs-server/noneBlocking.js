// Asychronous
const fs = require('fs');
fs.readFile('quotes.txt', (err, data) => {
  if (err) console.error(err);
  console.log(data.toString());
});

console.log('Program ended.');
