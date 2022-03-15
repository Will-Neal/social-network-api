const router = require('express').Router();
const {
    getThoughts,
    getSingleThought
} = require('../../controllers/thoughtController.js')

//Route for all thoughts
router.route('/').get(getThoughts);

//Route for single thought
router.route('/:thoughtId').get(getSingleThought)

module.exports = router;