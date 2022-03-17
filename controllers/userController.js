const res = require('express/lib/response')
const { User } = require('../models')

module.exports = {
    //Get All Users
    async getUsers(req, res) {
        const users = await User.find({})
        res.send(users)
    },
    //Get Single User by ID
    async getSingleUser(req, res) {
        const singleUser = await User.findOne({ _id: req.params.userId});
        res.json(singleUser)
    },
    //Post a new user
    async postNewUser(req, res) {
        const newUser = await User.create(req.body);
        res.json(`New User username: ${newUser.username} email: ${newUser.email} added successfully...`)
    },
    //PUT a user by Id
    async updateUser(req, res) {
        const updatedUser = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {new: true})
        res.json(`${updatedUser.username} updated successfully...`)    
    },
    //Delete a User
    async deleteUser(req, res) {
        const deletedUser = await User.findOneAndDelete({ _id:req.params.userId});
        res.json(`${deletedUser.username} deleted successfully...`)
    },
    //POST add new friend
    async addNewFriend(req, res) {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            { $addToSet: { friends: req.params.friendsId}},
            { new: true })
        console.log(newFriend)
        res.json(`New friend added to ${newFriend.username} successfully...`)
    },
    //DELETE friend from User
    async deleteFriend(req, res) {
        const deletedFriend = await User.findOneAndUpdate(
            { friends: req.params.friendsId},
            { $pull: {friends: req.params.friendsId}},
            { new: true }
        )
        res.json(`Friend ID: ${req.params.friendsId} removed from user ${deletedFriend.username}`)
    }
}