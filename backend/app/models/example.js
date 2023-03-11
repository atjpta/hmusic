const mongoose = require("mongoose");

const music = require('./music.models')
const playlist = require('./playlist.models')

const schema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        model: {
            type: mongoose.Schema.Types.Mixed,
            refPath: 'modelType'
        },
        modelType: {
            type: String,
            required: true,
            enum: ['music', 'playlist']
        }
    }
);

schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("favorite", schema);