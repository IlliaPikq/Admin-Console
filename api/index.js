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
    const {users} = JSON.parse(jsonFile);
    let start = req.query.start
    const end = req.query.end
    if (start && end) {
        const requestedUsers = []
        for (; start < end; start++) {
            requestedUsers.push(users[start]);
        }
        res.json(requestedUsers);
    } else res.json(users)
});


module.exports = app;
