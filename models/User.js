const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        validate: [validateEmail, 'Please enter a valid email address'],
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
        virtuals: true
    }
})

userSchema.virtual('friends').get(() => this.friends.length)

const User = mongoose.model("User", userSchema)

module.exports = User