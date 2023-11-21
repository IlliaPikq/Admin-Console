const express = require('express');
const cors = require('cors');
const userData = require('../public/userDB.json')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    const { users } = userData;
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