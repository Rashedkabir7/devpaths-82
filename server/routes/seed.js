const express = require('express');
const router = express.Router();
const { seedDatabase } = require('../seed'); // Assuming seed.js exports seedDatabase

router.post('/', async (req, res) => {
  try {
    await seedDatabase();
    res.status(200).send('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    res.status(500).send('Error seeding database.');
  }
});

module.exports = router;