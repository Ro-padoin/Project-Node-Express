const express = require('express');
const bodyParser = require('body-parser');
const createNewTalker = require('./createTalker');
const getTalker = require('./getTalker');
const getTalkerId = require('./getTalkerId');
const login = require('./login');
const { validateToken, validateName, validateAge, validateDate,
  validadeRate, validateTalk } = require('./validateData');
const editTalker = require('./editTalker');

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
app.put('/talker/:id', validateToken, validateName, validateAge,
validateTalk, validadeRate, validateDate, editTalker);

app.listen(PORT, () => {
  console.log('Online');
});
