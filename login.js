const crypto = require('crypto');

const messages = {
    email: 'O campo "email" é obrigatório',
    formatoEmail: 'O "email" deve ter o formato "email@email.com"',
    password: 'O campo "password" é obrigatório',
    caracteresPassword: 'O "password" deve ter pelo menos 6 caracteres',
};

function validateLoginData(req, res, next) {
    const { email, password } = req.body;
    const ruleEmail = /\S+@\S+\.\S+/;
    if (!email) return res.status(400).json({ message: messages.email });
    if (!ruleEmail.test(email)) return res.status(400).json({ message: messages.formatoEmail });
    if (!password) return res.status(400).json({ message: messages.password });
    if (password.length < 6) return res.status(400).json({ message: messages.caracteresPassword });
    next();
}

function login(_req, res) {
    const token = crypto.randomBytes(8).toString('hex');
    res.set('token', token);
    res.status(200).json({ token });
}

module.exports = { login, validateLoginData };