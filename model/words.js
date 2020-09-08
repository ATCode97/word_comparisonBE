const connection = require("../db/connection");

exports.fetchAllWords = ({ sort_by = "compared_at", order = "desc" }) => {
  return connection
    .select("*")
    .from("tblWords")
    .orderBy(sort_by, order)
    .returning("*")
    .then((words) => {
      return words;
    });
};

exports.addWords = (wordsObj) => {
  return connection
    .from("tblWords")
    .insert(wordsObj)
    .returning("*")
    .then((words) => {
      return words[0];
    });
};
