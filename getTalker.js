const fs = require('fs');

function getTalker(_req, res) {
    const jsonData = fs.readFileSync('./talker.json', 'utf8');
    const data = JSON.parse(jsonData);
    if (data.length === 0) return res.status(200).json([]);
    res.status(200).json(data);
 }

 module.exports = getTalker;