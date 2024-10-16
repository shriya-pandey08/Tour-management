import express from 'express';
import { 
  createTour, 
  deleteTour, 
  getAllTour, 
  getSingleTour, 
  updateTour 
} from '../controllers/tourControllers.js';

const router = express.Router();

// Create a new tour
router.post('/', createTour);

// Update an existing tour by ID
router.put('/:id', updateTour);

// Delete a tour by ID
router.delete('/:id', deleteTour);

// Get a single tour by ID
router.get('/:id', getSingleTour);

// Get all tours
router.get('/', getAllTour);

export default router;
