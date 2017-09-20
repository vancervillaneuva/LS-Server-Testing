const express = require('express');
const bodyParser = require('body-parser');
const Patient = require('./patient');
const morgan = require('morgan');

const server = express();

server.use(bodyParser.json());

server.use(morgan('combined'));



server.get('/patient', (req, res) => {
	Patient.find({}, (err, patient) => {
    res.send(patient);
	});
});

server.post('/patient', (req, res) => {
   new Patient(req.body).save((err, newPatient) => {
    if (err) return res.send(err);
    res.status(201);
    res.send(newPatient);
   });

  // another way
    // const food = new food(req.body);
    // food.save((err, newFood)=> {

    // });

});

module.exports = { server };