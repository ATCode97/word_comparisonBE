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
