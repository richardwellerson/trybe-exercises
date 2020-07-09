const AuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !(/\w{16}/.test(token))) return res.status(401).json({ message: "Não autorizado." });
  return next();
};

module.exports = AuthMiddleware;
