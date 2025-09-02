import express from 'express';
import Workout from '../model/workout.model.js';
import {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout} from '../controllers/workout.controller.js';


const router = express.Router();

router.get('/', getAllWorkouts) 

router.get('/:id', getWorkout)

router.post('/', createWorkout) 

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

export default router;