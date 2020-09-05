const { wordData } = require("../data/index.js");

const { formatDates } = require("../utils/utils");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const formattedWords = formatDates(wordData);
      return knex.insert(formattedWords).into("tblWords").returning("*");
    });
};
