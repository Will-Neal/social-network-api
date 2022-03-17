const { Thought, User } = require('../models');


module.exports = {
    //GET All Thoughts
    async getThoughts(req, res) {
        try {
            const allThoughts = await Thought.find({});
            res.json(allThoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET Single Thought by ID
    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findOne({ id: req.params.thoughtId });
            res.json(singleThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST new thought
    async postNewThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            const addToUser = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: newThought._id } },
                { new: true })
            res.json(`${addToUser.username}'s New Thought created successfully...`)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //PUT Update thought by id
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true });
            res.json(`Thought id ${updatedThought._id} updated successfully...`);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //POST add Reaction
    async addReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { new: true });
            res.json('New reaction added successfully...')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // DELETE Reaction by ID
    async deleteReaction(req, res) {
        try {
            const deletedReaction = await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true });
            res.json(`Reaction deleted successfully...`);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // DELETE thought by id
    async deleteThought(req, res) {
        try {
            const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            res.json(`Thought deleted successfully...`);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}