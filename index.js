const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const apiRoutes = require('./src/modules/routes/routes');

const mongoUserName = 'user';
const mongoUserPass = 'user';
const PORT = 5000;

app.use(cors());
const uri = `mongodb+srv://${mongoUserName}:${mongoUserPass}@cluster0.hihcv.mongodb.net/hospital?retryWrites=true&w=majority`;

mongoose.connect(uri);

app.use(express.json({ extended: true }));
app.use('/', apiRoutes);
app.listen(PORT, () => {
  console.log(`on port ${PORT}`);
});
