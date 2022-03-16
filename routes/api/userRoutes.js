const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
    deleteUser
} = require('../../controllers/userController.js')

//Route for all thoughts
router.route('/').get(getUsers).post(postNewUser);

//Route for single thought
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;