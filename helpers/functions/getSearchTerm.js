const { readFiles } = require('./fileSystem');
const { PATH, HTTP_OK_STATUS } = require('../statusAndPath/constants');

const getSearchTerm = async (req, res) => {
    const { q } = req.query;
    const data = await readFiles(PATH);
    const filterData = data.filter((talker) => talker.name.includes(q));
    if (!filterData) {
        return res.status(HTTP_OK_STATUS).json(data);
    }
    if (filterData.length === 0) {
        return res.status(HTTP_OK_STATUS).send([]);
    }

    res.status(HTTP_OK_STATUS).json(filterData);
};

module.exports = getSearchTerm;