const { fetchAllWords, addWords } = require("../model/words");

exports.getAllWords = (req, res, next) => {
  fetchAllWords(req.query)
    .then((wordsObj) => {
      res.status(200).send({ wordsObj });
    })
    .catch(next);
};

exports.postWords = (req, res, next) => {
  const { body } = req;
  addWords(body)
    .then((wordObj) => {
      res.status(201).send({ wordObj });
    })
    .catch(next);
};
