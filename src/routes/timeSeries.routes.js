const express = require('express')
const router = express.Router()
const cashflowController =   require('../controllers/cashflow.controller');
const cashflow = require('../models/cashflow.model');
// Retrieve all timeSeriess
router.get('/:branch',cashflowController.getTimeSeries);
//Yearwise
// router.get('/year/:id', timeSeriesController.findAllYear);
// // Create a new timeSeries
// router.post('/', timeSeriesController.create);
// // Retrieve a single timeSeries with id
// router.get('/:id', timeSeriesController.findById);
// // Update a timeSeries with id
// router.put('/:id', timeSeriesController.update);
// // Delete a timeSeries with id
// router.delete('/:id', timeSeriesController.delete);
module.exports = router
