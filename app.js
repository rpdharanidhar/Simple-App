const express = require('express');
const app = express();

function buildResponse() {
    return { 
        "myapplication": [
        {
        "version": process.env.version,
        "description" : "pre-interview technical test",
        "lastcommitsha": process.env.lastcommitsha
        }
       ]
    }
}

app.get('/',(req,res)=>{
    try {
        res.status(200).send({message: 'Technical Challenge, please see /healthcheck for application information'});
    }
    catch (err) {
        console.log('ERROR: ', err)
    }
});

app.get('/healthcheck',(req,res)=>{
    try {
        res.status(200).send(buildResponse());
    }
    catch (err) {
        console.log('ERROR: ', err)
    }
});

module.exports = app;