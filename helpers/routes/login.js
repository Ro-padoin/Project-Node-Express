const express = require('express');

const bodyParser = require('body-parser');

const login = express.Router();

const createLoginAndToken = require('../functions/createLoginAndToken');

login.use(bodyParser.json());

login.post('/', createLoginAndToken);

module.exports = login;
