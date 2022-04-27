const crypto = require('crypto');
const { HTTP_OK_STATUS, HTTP_BAD_REQUEST_STATUS } = require('../statusAndPath/constants');

const messages = {
    email: 'O campo "email" é obrigatório',
    emailFormat: 'O "email" deve ter o formato "email@email.com"',
    password: 'O campo "password" é obrigatório',
    numberOfCharacters: 'O "password" deve ter pelo menos 6 caracteres',
};

const validateLogin = (email, password) => {
    const ruleEmail = /\S+@\S+\.\S+/;
    if (!email) throw Error(messages.email);
    if (!ruleEmail.test(email)) throw Error(messages.emailFormat);
    if (!password) throw Error(messages.password);
    if (password.length < 6) throw Error(messages.numberOfCharacters);
};

const createLoginAndToken = (req, res) => {
    try {
        const { email, password } = req.body;
        validateLogin(email, password);
        const token = crypto.randomBytes(8).toString('hex');
        res.set('token', token);
        res.status(HTTP_OK_STATUS).json({ token });
    } catch (e) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: e.message });
    }
};

module.exports = createLoginAndToken;