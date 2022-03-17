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

//Route for all thoughts
router.route('/').get(getUsers).post(postNewUser);

//Route for single thought
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(addNewFriend).delete(deleteFriend)

module.exports = router;