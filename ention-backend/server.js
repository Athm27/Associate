// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');
const cardRoutes = require('./routes/cards');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contact', contactRoutes);
app.use('/api/cards', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});