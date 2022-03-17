const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postNewThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js')

//Route to GET all thoughts and POST new thoughts
router.route('/').get(getThoughts).post(postNewThought);

//Route for single thought, GET, PUT and DELETE
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//Route to POST Reaction
router.route('/:thoughtId/reaction').post(addReaction)
//Route to DELETE Reaction
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction)

module.exports = router;