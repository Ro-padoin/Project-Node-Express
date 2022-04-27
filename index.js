const express = require('express');
const bodyParser = require('body-parser');
const { PORT, HTTP_OK_STATUS } = require('./helpers/statusAndPath/constants');
const talker = require('./helpers/routes/talker');
const login = require('./helpers/routes/login');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(talker);
app.use(login);

app.listen(PORT, () => {
  console.log('Online');
});
