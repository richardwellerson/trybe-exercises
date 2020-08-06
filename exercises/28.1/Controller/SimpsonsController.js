const express = require('express');
const SimpsonsModel = require('../Model/SimpsonsModel');
const Middlewares = require('../Middlewares');
const router = express.Router();

router.use(Middlewares.AuthToken);

router.get('/', async (req, res) => {
  res.json(await SimpsonsModel.allCharacters());
});

router.get('/:id', async (req, res) => {
  const simpson = await SimpsonsModel.charId(req.params.id);
  if (!simpson) return res.status(404).json({ message: 'Simpson not found' });
  return res.status(200).json(simpson);
});

module.exports = router;
