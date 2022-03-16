const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Email address is required',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        getters: true,
        virtuals: false
    },
    id: false
})

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = model("User", userSchema)

module.exports = User