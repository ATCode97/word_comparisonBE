const {
  fetchAllWords,
  addWords,
  fetchAllPrimaryWords,
  fetchAllSecondaryWords,
  fetchAllComparedAt,
} = require("../model/words");

exports.getAllWords = (req, res, next) => {
  fetchAllWords()
    .then((wordsObj) => {
      res.status(200).send({ wordsObj });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postWords = (req, res, next) => {
  const { body } = req;
  addWords(body)
    .then((wordObj) => {
      res.status(201).send({ wordObj });
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getAllPrimaryWords = (req, res, next) => {
//   fetchAllPrimaryWords()
//     .then((wordsObj) => {})
//     .catch((err) => {});
// };

// exports.getAllSecondaryWords = (req, res, next) => {
//   fetchAllSecondaryWords()
//     .then((wordsObj) => {})
//     .catch((err) => {});
// };

// exports.getAllComparedAt = (req, res, next) => {
//   fetchAllComparedAt()
//     .then((wordsObj) => {})
//     .catch((err) => {});
// };
