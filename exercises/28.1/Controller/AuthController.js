const express = require('express');
const crypto = require('crypto');
const boom = require('boom');

const router = express.Router();

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /\d{6,}/;
const nameRegex = /[a-z]{3,}/i;
const phoneRegex = /\+\d{2} \(\d{2}\) \d{4,5}\-\d{4}/;

const generateToken = () => crypto.randomBytes(8).toString('hex');

router.post('/', (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].map((value) => value || undefined).includes(undefined)) {
    return next(boom.badData("Preencha tudo."));
  }
  if (!emailRegex.test(email)) {
    return next(boom.badData("Email inválido"));
  }
  if (!passwordRegex.test(password)) {
    return next(boom.badData("Senha inválida"));
  }
  if (!nameRegex.test(firstName)) {
    return next(boom.badData("Nome inválido"));
  }
  if (!phoneRegex.test(phone)) {
    return next(boom.badData("Telefone inválido"));
  }
  return res.status(200).json({ token: generateToken() });
});

module.exports = router;
