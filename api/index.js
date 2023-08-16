const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

  
app.get('/', (req, res) => {
    const filePath = path.join(process.cwd(), 'public', 'userDB.json');
    const jsonFile = fs.readFileSync(filePath);
    const data = JSON.parse(jsonFile);
    res.json(data);
});


module.exports = app;
