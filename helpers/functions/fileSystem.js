const { readFile, writeFile } = require('fs').promises;

const readFiles = async (path) => {
    try {
        const write = await readFile(path, 'utf8');
        const data = JSON.parse(write);
        return data;
    } catch (e) {
        console.log(`Erro na leitura do arquivo ${e.message}`);
        return null;
    }
};

const writeFiles = async (path, content) => {
    try {
        const write = await writeFile(path, JSON.stringify(content));
        return write;
    } catch (e) {
        console.log(`Erro ao escrever no arquivo ${e.message}`);
        return null;
    }
};

module.exports = {
    readFiles,
    writeFiles,
};