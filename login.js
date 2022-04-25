const crypto = require('crypto');

const messages = {
    email: 'O campo "email" é obrigatório',
    formatoEmail: 'O "email" deve ter o formato "email@email.com"',
    password: 'O campo "password" é obrigatório',
    caracteresPassword: 'O "password" deve ter pelo menos 6 caracteres',
};

function validateLoginData(email, password) {
    const ruleEmail = /\S+@\S+\.\S+/;
    if (!email) throw Error (messages.email);
    if (!ruleEmail.test(email)) throw Error (messages.formatoEmail);
    if (!password) throw Error (messages.password);
    if (password.length < 6) throw Error (messages.caracteresPassword);
}

function login(req, res) {
    try {
        const { email, password } = req.body;
        validateLoginData(email, password);
        const token = crypto.randomBytes(8).toString('hex');
        res.set('token', token);
        res.status(200).json({ token });
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

module.exports = login;