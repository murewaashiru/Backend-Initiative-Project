const express = require('express');

const Rental = require('../controllers/rentalController');

const router = express.Router();

router.post('/', Rental.createRental);
router.get('/', Rental.getRental);
router.get('/:id', Rental.getRentalById);
router.patch('/:id', Rental.updateRental);
router.delete('/:id', Rental.deleteRental);

module.exports = router;
