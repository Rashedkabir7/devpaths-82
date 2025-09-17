const express = require('express');
const router = express.Router();
const Roadmap = require('../models/Roadmap');

router.get('/', async (req, res) => {
  const roadmaps = await Roadmap.find().populate('topics');
  res.json(roadmaps);
});

router.post('/', async (req, res) => {
  const roadmap = new Roadmap(req.body);
  await roadmap.save();
  res.json(roadmap);
});

module.exports = router;
