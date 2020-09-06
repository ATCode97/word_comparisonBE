const { fetchAllWords } = require("../model/words");

exports.getAllWords = (req, res, next) => {
  fetchAllWords()
    .then((wordsObj) => {
      res.status(200).send({ wordsObj });
    })
    .catch((err) => {
      console.log(err);
    });
};
