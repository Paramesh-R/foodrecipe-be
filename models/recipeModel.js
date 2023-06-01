const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        foodName: {
            type: String,
            required: true,
        },
        foodType: {
            type: String,
            required: true,
        },
        foodDescription: {
            type: String,
            required: true,
        },
        foodImage: {
            type: String,
            required: true,
        },
        foodProcess: {
            type: String,
            required: true,
        },

    }
)

module.exports = mongoose.model('Food', recipeSchema);