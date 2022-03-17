const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
    deleteUser,
    updateUser,
    addNewFriend,
    deleteFriend
} = require('../../controllers/userController.js')

//Route to GET all thoughts and POST new users
router.route('/').get(getUsers).post(postNewUser);

//Route to GET single User, PUT single user and DELETE single USER
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//Route to POST new friend or DELETE a friend by id
router.route('/:userId/friends/:friendsId').post(addNewFriend).delete(deleteFriend)

module.exports = router;