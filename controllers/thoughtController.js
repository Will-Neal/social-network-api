const { Thought } = require('../models');


module.exports = {
    async getThoughts(req, res) {
        const allThoughts = await Thought.find({})
        res.json(allThoughts)
    },

    getSingleThought(req, res) {
        res.send(`This is the GET route for thought id: ${req.params.thoughtId}`)
    }
}