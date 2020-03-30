const express = require('express');
const IdeasController = require('./controllers/IdeasController');

const routes = express.Router();

routes.get('/ideias', IdeasController.index);
routes.post('/ideias', IdeasController.create);

module.exports = routes;
