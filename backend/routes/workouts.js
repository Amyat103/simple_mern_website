const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get one
router.get('/:id', getWorkout);

// CREATE new workout
router.post('/', createWorkout);

// DELETE new workout
router.delete('/:id', deleteWorkout);

// UPDATE new workout
router.patch('/:id', updateWorkout);

module.exports = router;
