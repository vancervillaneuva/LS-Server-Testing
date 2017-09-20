const express = require('express');
const bodyParser = require('body-parser');
//const Food = require('./food');
const morgan = require('morgan');

const server = express();

server.use(bodyParser.json());

server.use(morgan('combined'));


server.get('/',(req, res) => {
	res.send('hello world');
});

server.get('/food', (req, res) => {
	Food.find({}, (err, food) => {
    res.send(food)
	});
});

server.post('/food', (req, res) => {
   new Food(req.body).save((err, newFood) => {
    if (err) return res.send(err);
    res.status(201);
    res.send(newFood);
   });

  // another way
    const food = new food(req.body);
    food.save((err, newFood)=> {

    });

});
