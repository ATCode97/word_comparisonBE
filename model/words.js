const connection = require("../db/connection");

exports.fetchAllWords = ({ order = "desc" }) => {
  return connection
    .select("*")
    .from("tblWords")
    .orderBy(order)
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
