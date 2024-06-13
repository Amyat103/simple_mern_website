const express = require('express');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' });
});

// get one
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET one workout' });
});

// CREATE new workout
router.post('/', (req, res) => {
  res.json({ mssg: 'POST new workout' });
});

// DELETE new workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a workout' });
});

// UPDATE new workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a workout' });
});

module.exports = router;
