const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
    category: {
        type: String,
        enum: ['Persona', 'Lugar', 'Cosa', 'Idea', 'Otro'],
        required: true,
    },
    count: {
        type: Number,
        default: 0,
        min: [0, 'Count must be positive'],
    },
});

module.exports = mongoose.model('Like', likeSchema);
