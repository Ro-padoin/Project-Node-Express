const { readFiles, writeFiles } = require('./fileSystem');
const { PATH, HTTP_CREATED_STATUS } = require('../statusAndPath/constants');

const createNewTalker = async (req, res) => {
   const data = await readFiles(PATH);
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
   await writeFiles(PATH, data);
   return res.status(HTTP_CREATED_STATUS).json(newTalker);
};

module.exports = createNewTalker;