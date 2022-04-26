const fs = require('fs');

const editTalker = (req, res) => {
    const { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const file = fs.readFileSync('./talker.json', 'utf8');
    const data = JSON.parse(file);
    const dataIndex = data.findIndex((element) => element.id === Number(id));
    const editedTalker = { id: Number(id), name, age, talk: { watchedAt, rate } };
    data[dataIndex] = editedTalker;
    fs.writeFileSync('./talker.json', JSON.stringify(data));
    return res.status(200).json(editedTalker);
};

module.exports = editTalker;
