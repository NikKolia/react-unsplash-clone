const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, './build')));
app.use(bodyParser.json());

app.get('/*', async (req, res) => {
  res.sendFile('./build/index.html');
});

app.listen(PORT, () => {
  console.log('Listening on ' + PORT);
});
