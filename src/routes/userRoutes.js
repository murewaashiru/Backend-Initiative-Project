const express = require('express');

const User = require('../controllers/userController');
const Validation = require('../validation/userValidation');

const router = express.Router();

router.post('/', Validation.createUser, User.createUser);
router.get('/', User.getUser);
router.get('/:id', User.getUserById);
router.patch('/:id', Validation.updateUser, User.updateUser);
router.delete('/:id', User.deleteUser);

module.exports = router;
