const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const app = express();

app.get('/ping', (req, res) => res.send('pong!'));

app.use(express.static(__dirname + '/uploads'));

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.send().status(200)
);

module.exports = app
