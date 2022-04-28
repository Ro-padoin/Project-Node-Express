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

talker.get('/', getTalker);
talker.get('/search', validateToken, getSearchTerm);
talker.get('/:id', getTalkerId);
talker.post('/', validateToken, validateName, validateAge,
    validateTalk, validateDate, validadeRate, createNewTalker);
talker.put('/:id', validateToken, validateName, validateAge,
    validateTalk, validadeRate, validateDate, editTalker);
talker.delete('/:id', validateToken, deleteTalker);

module.exports = talker;