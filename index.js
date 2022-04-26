const express = require('express');
const bodyParser = require('body-parser');
const createNewTalker = require('./createTalker');
const getTalker = require('./getTalker');
const getTalkerId = require('./getTalkerId');
const validateToken = require('./tokenMiddleware');
const login = require('./login');
const { validateName, validateAge, validateDate,
  validadeRate, validateTalk } = require('./validateData');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalker);
app.get('/talker/:id', getTalkerId);
app.post('/login', login);
app.post('/talker', validateToken, validateName, validateAge,
  validateTalk, validateDate, validadeRate, createNewTalker);

app.listen(PORT, () => {
  console.log('Online');
});
