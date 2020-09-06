exports.handle400s = (err, req, res, next) => {
  const { code } = err;
  const errors400 = ["23502", "42703"];

  if (errors400.includes(code)) res.status(400).send({ msg: "bad request" });
  else next(err);
};

exports.handle500s = (err, req, res, next) => {
  console.log(err, "<---- ERROR from index");
  res.status(500).send({ msg: "internal server error" });
};
