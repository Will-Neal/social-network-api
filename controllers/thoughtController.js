module.exports = {
    getThoughts(req, res) {
        res.send('This is the GET route for all thoughts')
    },

    getSingleThought(req, res) {
        res.send(`This is the GET route for thought id: ${req.params.thoughtId}`)
    }
}