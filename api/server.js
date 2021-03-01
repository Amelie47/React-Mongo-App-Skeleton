// api/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const apiPort = 3080;

const db = require('./db');
const MemberRouter = require('./routes/MemberRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/member', MemberRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
