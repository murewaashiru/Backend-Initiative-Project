const express = require('express');

const Rental = require('../controllers/rentalController');
const Validation = require('../validation/rentalValidation');


const router = express.Router();

router.post('/', Validation.createRental, Rental.createRental);
router.get('/', Rental.getRental);
router.get('/:id', Rental.getRentalById);
router.patch('/:id', Validation.updateRental, Rental.updateRental);
router.delete('/:id', Rental.deleteRental);

module.exports = router;
