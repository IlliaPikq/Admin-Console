const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());
  
  
  
  app.get('/', (req, res) => {
  const jsonFile = fs.readFileSync('./public/userDB.json');
  const data = JSON.parse(jsonFile);
  res.json(data);
});


module.exports = app;
