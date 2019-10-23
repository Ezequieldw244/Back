const mongoose = require('mongoose');
const URI = 'mongodb://localhost/vet';

mongoose.connect(URI) // usa promises
	.then(db => console.log('Base de datos conectada'))
	.catch(err => console.error(err));

module.exports = mongoose;