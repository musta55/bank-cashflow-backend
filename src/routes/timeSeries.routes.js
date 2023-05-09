const express = require('express')
const router = express.Router()
const timeSeriesController =   require('../controllers/timeSeries.controller');
// Retrieve all timeSeriess
router.get('/', timeSeriesController.findAll);
// Create a new timeSeries
router.post('/', timeSeriesController.create);
// Retrieve a single timeSeries with id
router.get('/:id', timeSeriesController.findById);
// Update a timeSeries with id
router.put('/:id', timeSeriesController.update);
// Delete a timeSeries with id
router.delete('/:id', timeSeriesController.delete);
module.exports = router