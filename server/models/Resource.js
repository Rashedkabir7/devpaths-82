const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  url: String,
  type: String,
  platform: String,
  difficulty: String
}, { timestamps: true });

module.exports = mongoose.model('Resource', ResourceSchema);
