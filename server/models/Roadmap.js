const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoadmapSchema = new Schema({
  title: String,
  description: String,
  topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
}, { timestamps: true });

module.exports = mongoose.model('Roadmap', RoadmapSchema);
