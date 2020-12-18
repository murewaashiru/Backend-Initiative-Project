const express = require('express');

const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes')
const rentalRoutes = require('./rentalRoutes')
const router = express.Router();

router.use('/user', userRoutes);
router.use('/movie', movieRoutes);
router.use('/rental', rentalRoutes);
router.get('/', (req, res) => res.send('Welcome'));

module.exports = router;
