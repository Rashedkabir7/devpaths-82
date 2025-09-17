const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  title: String,
  description: String,
  resources: [{ type: Schema.Types.ObjectId, ref: 'Resource' }]
}, { timestamps: true });

module.exports = mongoose.model('Topic', TopicSchema);
