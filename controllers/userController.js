const res = require('express/lib/response')
const { User } = require('../models')

module.exports = {
    //Get All Users
    async getUsers(req, res) {
        try {
          const users = await User.find({})
        res.send(users)  
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get Single User by ID
    async getSingleUser(req, res) {
        try {
           const singleUser = await User.findOne({ _id: req.params.userId});
            res.json(singleUser) 
        } catch (err) {
            res.status(500).json(err)
        }  
    },
    //Post a new user
    async postNewUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(`New User username: ${newUser.username} email: ${newUser.email} added successfully...`)  
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //PUT a user by Id
    async updateUser(req, res) {
        try{
            const updatedUser = await User.findOneAndUpdate(
              {_id: req.params.userId},
              {$set: req.body},
              {new: true})
            res.json(`${updatedUser.username} updated successfully...`)  
        } catch (err) {
            res.status(500).json(err);
        } 
    },
    //Delete a User
    async deleteUser(req, res) {
        try {
           const deletedUser = await User.findOneAndDelete({ _id:req.params.userId});
            res.json(`${deletedUser.username} deleted successfully...`) 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //POST add new friend
    async addNewFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            { $addToSet: { friends: req.params.friendsId}},
            { new: true })
        res.json(`New friend added to ${newFriend.username} successfully...`);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //DELETE friend from User
    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
            { friends: req.params.friendsId},
            { $pull: {friends: req.params.friendsId}},
            { new: true }
        )
        res.json(`Friend ID: ${req.params.friendsId} removed from user ${deletedFriend.username}`)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}