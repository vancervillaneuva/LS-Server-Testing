const mongoose = require ('mongoose');
//const server = require ('./server');
const { server } = require('./server.js');


mongoose.connect('mongodb://localhost/patient', {}, (err) => {
	if (err) return console.log(err);
	console
});

server.listen(5000);
