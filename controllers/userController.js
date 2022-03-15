module.exports = {
    getUsers(req, res) {
        res.send('This is the GET route for all users')
    },

    getSingleUser(req, res) {
        res.send(`This is the GET route for user id: ${req.params.userId}`)
    }
}