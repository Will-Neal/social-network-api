const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: ObjectId,
            default: new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => {
                return new Date(time).toLocaleDateString()
            }
        }
    }
)

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => {
                return new Date(time).toLocaleDateString()
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }, {
    toJSON: {
        getters: true,
        virtuals: true
    }
}
);

thoughtSchema.virtual('reactionCount').get(function(){
    this.reactions.length
});

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought