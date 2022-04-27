const express = require('express');

const bodyParser = require('body-parser');

const talker = express.Router();

const createNewTalker = require('../functions/createNewTalker');
const deleteTalker = require('../functions/deleteTalker');
const editTalker = require('../functions/editTalker');
const getSearchTerm = require('../functions/getSearchTerm');
const getTalker = require('../functions/getTalker');
const getTalkerId = require('../functions/getTalkerId');
const { validateToken, validateName, validateAge, validateDate,
    validadeRate, validateTalk } = require('../middlewares/validateData');

talker.use(bodyParser.json());

talker.get('/talker', getTalker);
talker.get('/talker/search', validateToken, getSearchTerm);
talker.get('/talker/:id', getTalkerId);
talker.post('/talker', validateToken, validateName, validateAge,
    validateTalk, validateDate, validadeRate, createNewTalker);
talker.put('/talker/:id', validateToken, validateName, validateAge,
    validateTalk, validadeRate, validateDate, editTalker);
talker.delete('/talker/:id', validateToken, deleteTalker);

module.exports = talker;