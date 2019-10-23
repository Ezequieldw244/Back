const express = require('express');
const morgan = require('morgan');
const app = express();

const {mongoose} = require('./database');
// settings / configuraciones
app.set('port', 3000);

// middlewares /
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.use('/api/agency',require('./routes/agency.routes'));

// Inicio del server
app.listen(3000, () => {
	console.log('Were are live on 3000');
});