const fs = require('fs');

const createNewTalker = (req, res) => {
   const jsonData = fs.readFileSync('./talker.json', 'utf8');
   const data = JSON.parse(jsonData);
   const { name, age, talk } = req.body;
   const { watchedAt, rate } = talk;
   const newTalker = {
      id: data.length + 1,
      name,
      age,
      talk: {
         watchedAt,
         rate,
      },
   };
   data.push(newTalker);
   fs.writeFileSync('./talker.json', JSON.stringify(data));
   return res.status(201).json(newTalker);
};

module.exports = createNewTalker;