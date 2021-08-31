const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const hostname = 'localhost';
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
  res.send('fruitshop');
});

// List record
app.get('/fruitlist', (req, res) => {
  const sql = 'SELECT * FROM fruits;';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Insert record
app.post('/create', (req, res) => {
  const fruitName = req.body.fruit_name;
  const inventory = req.body.inventory;
  const unitId = req.body.unit_id;

  db.query(
    `INSERT INTO fruits (fruit_name, inventory, unit_id) VALUES ('${fruitName}', '${inventory}', '${unitId}')`,
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Record has been added.' });
    }
  );
});

// Update record
app.put('/update', (req, res) => {
  const fruitId = req.body.fruit_id;
  const fruitName = req.body.fruit_name;
  const inventory = req.body.inventory;
  const unitId = req.body.unit_id;

  db.query(
    `UPDATE fruits SET fruit_name = '${fruitName}', inventory = '${inventory}', unit_id = '${unitId}' WHERE fruit_id = '${fruitId}'`,
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Record has been updated.' });
    }
  );
});

// Delete record
app.delete('/delete', (req, res) => {
  const fruitName = req.body.fruit_name;

  db.query(
    `DELETE FROM fruits WHERE fruit_name = '${fruitName}'`,
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Record has been deleted.' });
    }
  );
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
