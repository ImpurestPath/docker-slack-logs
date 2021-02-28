'use strict';

const express = require('express');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const port = 8096;
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.post('/logs', async (req, res) => {
    const name = req.body.text
    console.log(req.body)
    const {stdout, stderr} = await exec("./docker-scripts.sh logs " + name)
    if (stderr) {
        res.send(stderr)
        return
    }
    res.send(stdout)
});

app.listen(port);