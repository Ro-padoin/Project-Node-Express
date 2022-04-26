const fs = require('fs');

const deleteTalker = (req, res) => {
    const { id } = req.params;
    const file = fs.readFileSync('./talker.json', 'utf8');
    const data = JSON.parse(file);
    const dataIndex = data.findIndex((element) => element.id === Number(id));
    data.splice(dataIndex, 1);
    fs.writeFileSync('./talker.json', JSON.stringify(data));
    return res.status(204).end();
};

module.exports = deleteTalker;