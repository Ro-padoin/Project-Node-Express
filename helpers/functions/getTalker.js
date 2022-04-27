const { readFiles } = require('./fileSystem');
const { PATH, HTTP_OK_STATUS } = require('../statusAndPath/constants');

const getTalker = async (_req, res) => {
    const data = await readFiles(PATH, 'utf8');
    if (data.length === 0) return res.status(HTTP_OK_STATUS).send([]);
    res.status(HTTP_OK_STATUS).json(data);
};

module.exports = getTalker;