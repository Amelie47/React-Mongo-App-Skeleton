// db/index.js
const mongoose = require('mongoose');

// Database Name
const clusterName = 'NOMDUCLUSTER';
const dbName = 'NOMDELABDD';
const dbUser = 'NOMDUUSER';
const dbPwd = 'MOTDEPASSE';

// Connection URL
const url =
  'mongodb+srv://' +
  dbUser +
  ':' +
  dbPwd +
  '@' +
  clusterName +
  '/' +
  dbName +
  '?retryWrites=true&w=majority';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("We're connected!");
});

module.exports = db;
