const fs = require('fs');

function getTalkerId(req, res) {
    const { id } = req.params;
    const jsonData = fs.readFileSync('./talker.json', 'utf8');
    const data = [...JSON.parse(jsonData)];
    const idData = data.find((element) => element.id === Number(id));
    if (!idData) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(idData);
 }

 module.exports = getTalkerId;