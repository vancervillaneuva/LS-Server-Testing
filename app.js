const mongoose = require ('mongoose');
const server = require ('./server');

mongoose.connect('mongod://localhost/food', {}, (err) => {
	if (err) return console.log(err);
	console
});

server.listen(8080, () => {
	console.log('server listening to port 8080');
});
