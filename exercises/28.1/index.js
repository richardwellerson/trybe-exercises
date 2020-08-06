const controllers = require('./Controller');
const bodyParser = require('body-parser');
const express = require('express');
const Middlewares = require('./Middlewares');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ name: 'Hello World' });
  next();
});

app.use('/simpsons', controllers.simpsonsController);

app.use('/signup', controllers.authController);

app.get('/error', (req, res) => {
  throw new Error('Tela azul');
});

app.use(Middlewares.BoomErrorHandler);

app.use(Middlewares.OtherErrors);

app.listen(3000, console.log('Listen to localhost/3000'));
