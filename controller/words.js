exports.getAllWords = (req, res, next) => {
  fetchAllWords().then(() => {
    res.sendStatus(200);
  });
};
