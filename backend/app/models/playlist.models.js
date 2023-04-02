const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        img: {
            type: String,
        },
        view: {
            type: String,
        },
        list: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "music"
            }
        ],
    },
    {
        timestamps: true,
    }
);

schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("playlist", schema);