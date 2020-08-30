const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getRhymeSuggestion } = require('./utils/rhyme');

app.use(express.json());

app.get(`/word`, async (req, res) => {
  try {
    const { word1, word2 } = req.body;
    const a = await getRhymeSuggestion(word1, word2);
    res.send(a);
  } catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up on ${port}`);
});

app.get(`/`, async (req, res) => {
  res.send("test");
});