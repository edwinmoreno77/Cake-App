const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },

    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    img: {
        type: String,
    },

    role: {
        type: String,
        required: true,
        emun: ['USER_ROLE', 'ADMIN_ROLE'],
    },

    state: {
        type: Boolean,
        default: true,
    },

    google: {
        type: Boolean,
        default: false,
    }

});

userSchema.method('toJSON', function () {
    const { __v, password, ...user } = this.toObject();
    return user;
});


module.exports = model('User', userSchema);