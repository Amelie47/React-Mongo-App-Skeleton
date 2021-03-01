// api/models/MemberModel.js
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MemberSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

//Export function to create "Member" model class
module.exports = mongoose.model('Member', MemberSchema);
