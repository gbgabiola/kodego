const express = require('express');
const router = express.Router();

// router.get('/view', (req, res) => {
//   res.json({
//     firstName: 'Juan',
//     lastName: 'Dela Cruz',
//     age: 30,
//   });
//   // res.send('view list');
// });

router.post('/insert', (req, res) => {
  // res.json({
  //   message: 'success',
  // });
  console.log(req.body);
});

router.get('/view', (req, res) => {
  // res.json({
  //   firstName: 'Juan',
  //   lastName: 'Dela Cruz',
  //   age: 30,
  // });
  // res.send('view list');

  // console.log(req.query);
  // res.send(req.query);
  console.log(req.body);
});

module.exports = router;
