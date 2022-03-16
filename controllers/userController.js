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
    //Delete a User
    async deleteUser(req, res) {
        const deletedUser = await User.findOneAndDelete({ _id:req.params.userId});
        res.json(`${deletedUser.username} deleted successfully...`)
    }
}