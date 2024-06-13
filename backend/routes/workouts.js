const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get one
router.get('/:id', getWorkout);

// CREATE new workout
router.post('/', createWorkout);

// DELETE new workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a workout' });
});

// UPDATE new workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a workout' });
});

module.exports = router;
