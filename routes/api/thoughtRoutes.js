const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postNewThought,
    deleteThought
} = require('../../controllers/thoughtController.js')

//Route for all thoughts
router.route('/').get(getThoughts).post(postNewThought);

//Route for single thought
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;