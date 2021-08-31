const fs = require('fs');

fs.readFile('input.txt', function (err, data) {
  return err ? console.error(err) : console.log(data.toString());
});

console.log('Program Ended');
