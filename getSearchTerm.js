const fs = require('fs');

const getSearchTerm = (req, res) => {
    const { q } = req.query;
    const file = fs.readFileSync('./talker.json', 'utf8');
    const data = JSON.parse(file);
    const filterData = data.filter((talker) => talker.name.includes(q));
    if (!filterData) {
        return res.status(200).json(data);
    }
    if (filterData.length === 0) {
        return res.status(200).json([]);
    }

    res.status(200).json(filterData);
};

module.exports = getSearchTerm;