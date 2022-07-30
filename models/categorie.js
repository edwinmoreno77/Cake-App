const { Schema, model } = require('mongoose');


const categorieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },

    state: {
        type: Boolean,
        default: true,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

});

module.exports = model('Categorie', categorieSchema);