'use strict';
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.post('/v1/generate', (req, res) => {
  // Post request allows for future parameters, though currently strictly v4
  const output = uuidv4();
  res.status(200).json({ output });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`UUID Generator running on port ${PORT}`));
