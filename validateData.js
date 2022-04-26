const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
};

const validateAge = (req, res, next) => {
    const { age } = req.body;
    if (!age || age === '') return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    if (age < 18) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
};

const validateDate = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const formatDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    const verifyFormatDate = formatDate.test(watchedAt);
    if (!verifyFormatDate) {
        return res.status(400).json({
            message:
                'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }

    next();
};
// referencia para regex: StackOverFlow;

const validadeRate = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (rate < 1 || rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    next();
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk || !talk.watchedAt || !talk.rate) {
        return res.status(400).json({
            message:
                'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }
    next();
};

module.exports = {
    validateTalk,
    validadeRate,
    validateDate,
    validateAge,
    validateName,
};