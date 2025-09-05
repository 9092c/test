module.exports = {
  server: {
    baseDir: "./",
    middleware: {
      1: function (req, res, next) {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        next();
      }
    }
  }
};
