const connection = require("../db/connection");

exports.fetchAllWords = () => {
  return connection
    .select("*")
    .from("tblWords")
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

// exports.fetchAllPrimaryWords = () => {};

// exports.fetchAllSecondaryWords = () => {};

// exports.fetchAllComparedAt = () => {};
