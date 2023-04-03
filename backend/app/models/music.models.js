const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        name: String,
        time: String,
        lyrics: String,
        artist: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "artist"
            }
        ],
        singer: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "singer"
            }
        ],
        genre: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "genre"
            }
        ],
        country: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "country"
            }
        ],
        view: Intl,
        url: {
            type: String,
        },
        url_image: {
            type: String,
        },
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

module.exports = mongoose.model("music", schema);