const { readFiles, writeFiles } = require('./fileSystem');
const { PATH, HTTP_OK_STATUS, HTTP_NOT_FOUND_STATUS } = require('../statusAndPath/constants');

const editTalker = async (req, res) => {
    const { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const data = await readFiles(PATH);
    
    if (data === null) {
        return res.status(HTTP_NOT_FOUND_STATUS).send();
    }

    const dataIndex = data.findIndex((element) => element.id === Number(id));
    const editedTalker = { id: Number(id), name, age, talk: { watchedAt, rate } };
    data[dataIndex] = editedTalker;
    await writeFiles(PATH, data);
    res.status(HTTP_OK_STATUS).json(editedTalker);
};

module.exports = editTalker;
