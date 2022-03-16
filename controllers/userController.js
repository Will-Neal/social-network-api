const { User, Thought } = require('../models')

module.exports = {
    async getUsers(req, res) {
        const users = await User.find({})
        res.send(users)
    },

    async getSingleUser(req, res) {
        const singleUser = await User.findOne({ _id: req.params.id})
        res.json(singleUser)
    }
}