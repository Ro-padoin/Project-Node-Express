const { readFiles, writeFiles } = require('./fileSystem');
const { PATH, HTTP_NO_CONTENT_STATUS, HTTP_NOT_FOUND_STATUS } = require('../statusAndPath/constants');

const deleteTalker = async (req, res) => {
    const { id } = req.params;
    const data = await readFiles(PATH);

    if (data === null) {
        return res.status(HTTP_NOT_FOUND_STATUS).send();
    }
    
    const dataIndex = data.findIndex((element) => element.id === Number(id));
    data.splice(dataIndex, 1);
    await writeFiles(PATH, data);
    res.status(HTTP_NO_CONTENT_STATUS).end();
};

module.exports = deleteTalker;