const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postNewThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtController.js')

//Route for all thoughts
router.route('/').get(getThoughts).post(postNewThought);

//Route for single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;