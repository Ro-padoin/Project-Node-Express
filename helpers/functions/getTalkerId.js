const { readFiles } = require('./fileSystem');
const { PATH, HTTP_NOT_FOUND_STATUS, HTTP_OK_STATUS } = require('../statusAndPath/constants');

const getTalkerId = async (req, res) => {
    const { id } = req.params;
    const data = await readFiles(PATH);
    const idData = data.find((element) => element.id === Number(id));
    if (!idData) {
        return res.status(HTTP_NOT_FOUND_STATUS)
            .json({ message: 'Pessoa palestrante não encontrada' });
    }
    res.status(HTTP_OK_STATUS).json(idData);
};

module.exports = getTalkerId;