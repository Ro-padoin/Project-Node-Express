

function validateDateRate(talk) {
    const dateCondition = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    const formatDate = dateCondition.test(talk.watchedAt);
    if (!formatDate)
        throw Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
    if (!Number.isInteger(talk.rate) || (talk.rate < 1 || talk
        .rate > 5))
        throw Error('O campo "rate" deve ser um inteiro de 1 à 5');
    if (!talk || talk.watchedAt === '' || talk.rate === '')
        throw Error('O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios');
}

function validateData(name, age, talk) {

    if (!name || name === '') throw Error('O campo "name" é obrigatório');
    if (name.length < 3) throw Error('O "name" ter pelo menos 3 caracteres');
    if (!age || age === '') throw Error('O campo "age" é obrigatório');
    if (age < 18) throw Error('A pessoa palestrante deve ser maior de idade');
    validateDateRate(talk);
}

module.exports = validateData;

