'use strict';

const express = require('express');

// константы
const port = 8096;


// приложение
const app = express();
app.post('/logs', (req, res) => {
    console.log(req);
    res.send('Hello World');
});

app.listen(port);
console.log(`running on http://${host}:${port}`);