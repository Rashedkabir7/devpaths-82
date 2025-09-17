const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  userId: String,
  roadmapId: { type: Schema.Types.ObjectId, ref: 'Roadmap' },
  completions: { type: Map, of: Boolean, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Progress', ProgressSchema);
