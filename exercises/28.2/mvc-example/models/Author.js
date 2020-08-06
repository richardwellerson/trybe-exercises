const connection = require("./connection");

/**
 * Busca todos os autores do banco.
 */
const getAll = async () =>
  connection()
    .then((db) =>
      db
        .getTable("authors")
        .select(["id", "first_name", "middle_name", "last_name"])
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((authors) =>
      authors.map(([id, firstName, middleName, lastName]) => ({
        id,
        firstName,
        middleName,
        lastName,
      }))
    );

module.exports = {
  getAll,
};
