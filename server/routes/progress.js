const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const progress = await Progress.find({ userId });
  res.json(progress);
});

router.post('/', async (req, res) => {
  const { userId, roadmapId, completions } = req.body;
  let doc = await Progress.findOne({ userId, roadmapId });
  if (!doc) doc = new Progress({ userId, roadmapId, completions });
  else doc.completions = { ...doc.completions, ...completions };
  await doc.save();
  res.json(doc);
});

module.exports = router;
