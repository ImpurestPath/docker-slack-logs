'use strict';

const express = require('express');
const { exec } = require("child_process");

const port = 8096;



const app = express();
app.post('/logs', async (req, res) => {
    const name = req.query.text

    const {stdout, stderr} = await exec("./docker-scripts.sh logs " + name)
    if (stderr) {
        res.send(stderr)
        return
    }
    res.send(stdout)
});

app.listen(port);
