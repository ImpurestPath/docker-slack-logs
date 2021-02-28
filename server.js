'use strict';

const express = require('express');
const { exec } = require("child_process");
const url = require('url');

const port = 8096;



const app = express();
app.post('/logs', (req, res) => {
    const name = req.query.text

    exec("./docker-scripts.sh logs " + name, (error, stdout, stderr) => {
        if (error) {
            res.sendStatus(500);
            return;
        }
        if (stderr) {
            res.send(stderr)
            return;
        }
        res.send(stdout)
    });

    res.send('Hello World');
});

app.listen(port);
