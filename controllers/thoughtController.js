const { Thought } = require('../models');


module.exports = {
    async getThoughts(req, res) {
        const allThoughts = await Thought.find({})
        res.json(allThoughts)
    },

    async getSingleThought(req, res) {
        const singleThought = await Thought.findOne({ id: req.params.thoughtId})
        res.json(singleThought)
    }
}