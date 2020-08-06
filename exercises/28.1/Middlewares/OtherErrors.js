const OtherErrors = (error, _req, res, _next) => {
  return res.status(500).json({ message: error.message || "Erro Interno" });
};

module.exports = OtherErrors;
