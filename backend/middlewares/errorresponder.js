const errorResponder = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      error: err,
    },
  });
};

export default errorResponder;
