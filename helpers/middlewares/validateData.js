const { HTTP_UNAUTHORIZED_STATUS, HTTP_BAD_REQUEST_STATUS } = require('../statusAndPath/constants');

const validateAge = (req, res, next) => {
    const { age } = req.body;
    if (!age || age === '') {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'A pessoa palestrante deve ser maior de idade',
        });
    }
    next();
};

const validateDate = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const formatDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/; // referencia para regex: StackOverFlow;
    const verifyFormatDate = formatDate.test(watchedAt);
    if (!verifyFormatDate) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message:
                'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }
    next();
};

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'O campo "name" é obrigatório',
        });
    }
    if (name.length < 3) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'O "name" deve ter pelo menos 3 caracteres',
        });
    }
    next();
};

const validadeRate = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (rate < 1 || rate > 5) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }
    next();
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk || !talk.watchedAt || talk.rate === undefined) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message:
                'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }
    next();
};

const validateToken = (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) {
        return res.status(HTTP_UNAUTHORIZED_STATUS).json({
            message: 'Token não encontrado',
        });
    }
    if (token.length < 16) {
        return res.status(HTTP_UNAUTHORIZED_STATUS).json({
            message: 'Token inválido',
        });
    }
    next();
};

module.exports = {
    validateAge,
    validateDate,
    validateName,
    validadeRate,
    validateTalk,
    validateToken,
};