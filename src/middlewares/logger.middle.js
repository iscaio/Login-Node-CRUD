//logger
module.exports = (req, res, next) => {
  console.log(`Request type: ${req.method}`);
  console.log(`Content type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
};
