// @ts-check

'use strict'

const express = require('express')

const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res, next) => {
    res.sendFile("index.html")
});


//Question 4

let users = []

app.post('/users', (req, res, next) => {
    const user = req.body
    user.bithday = new Date(user.bithday)
    user.id = Date.now()
    users.push(user)
    res.json(user)
});

//End of Question 4

// Question 5

app.get('/users', (req, res, next) => {
    res.json(users)
});

app.get('/users/:id', (req, res, next) => {
    res.json(users.filter(user => user.id == req.params.id));
});

app.put('/users/:id', (req, res, next) => {
    const user = req.body;
    user.bithday = new Date(user.bithday);
    user.id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == user.id) {
            users[i] = user;
            res.json(user);
            return;
        }
    }
});

app.delete('/users/:id', (req, res, next) => {
    users = users.filter(user => user.id != req.params.id);
});

//End of Question 5`


app.listen(3001, err => {
    if (err) {
        console.log(err);
    }
    console.log('app listening on port 3000');
});