const router = require('express').Router();
const {
    getUsers,
    getSingleUser
} = require('../../controllers/userController.js')

//Route for all thoughts
router.route('/').get(getUsers);

//Route for single thought
router.route('/:userId').get(getSingleUser);

module.exports = router;