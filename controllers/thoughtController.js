const { Thought } = require('../models');


module.exports = {
    //GET All Thoughts
    async getThoughts(req, res) {
        const allThoughts = await Thought.find({})
        res.json(allThoughts)
    },
    //GET Single Thought by ID
    async getSingleThought(req, res) {
        const singleThought = await Thought.findOne({ id: req.params.thoughtId})
        res.json(singleThought)
    },
    // POST new thought
    async postNewThought(req, res) {
        const newThought = await Thought.create(req.body);
        res.json(`New Thought created successfully...`)
    },
    //PUT Update thought by id
    async updateThought(req, res) {
        const updatedThought = await Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$set: req.body},
            {new:true});
        res.json(`Thought id ${updatedThought._id} updated successfully...`)
    },
    // DELETE thought by id
    async deleteThought(req, res) {
        const deletedThought = await Thought.findOneAndDelete({ _id:req.params.thoughtId});
        res.json(`Thought deleted successfully...`)
    }

}