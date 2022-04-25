const fs = require('fs');
const validateData = require('./validateData');

const jsonData = fs.readFileSync('./talker.json', 'utf8');
const data = [...JSON.parse(jsonData)];

function createNewTalker(req, res) {
   try {
      const { name, age, talk } = req.body;
      const { watchedAt, rate } = talk;
      validateData(name, age, talk);
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
      res.status(201).json(newTalker);
   } catch (e) {
      return res.status(400).json({ message: e.message });
   }
}

module.exports = createNewTalker;
