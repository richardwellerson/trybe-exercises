const db = require('./simpsons.json');

const allCharacters = () =>
  Promise.resolve(db);

const charId = (idRequest) =>
  Promise.resolve(
    db.characters.find(({ id }) => id === idRequest)
  );

module.exports = {
  allCharacters,
  charId,
};
