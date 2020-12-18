const express = require('express');

const User = require('../controllers/userController');

const router = express.Router();

router.post('/', User.createUser);
router.get('/', User.getUser);
router.get('/:id', User.getUserById);
router.patch('/:id', User.updateUser);
router.delete('/:id', User.deleteUser);

module.exports = router;
