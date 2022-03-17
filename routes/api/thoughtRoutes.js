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

//Route for all thoughts
router.route('/').get(getThoughts).post(postNewThought);

//Route for single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(addReaction)

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction)

module.exports = router;