const fs = require('fs');

const jsonData = fs.readFileSync('./talker.json', 'utf8');

function getTalker(_req, res) {
   const data = JSON.parse(jsonData);
   if (data.length === 0) return res.status(200).json([]);
   res.status(200).json(data);
}

function getTalkerId(req, res) {
   const { id } = req.params;
   const data = [...JSON.parse(jsonData)];
   const idData = data.find((element) => element.id === Number(id));
   if (!idData) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
   res.status(200).json(idData);
}

module.exports = { 
   getTalker, 
   getTalkerId,
};