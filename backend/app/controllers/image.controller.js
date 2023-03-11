const mongoose = require("mongoose");
const config = require("../config");

let bucket;

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
  const client = db.client;
  bucket = new mongoose.mongo.GridFSBucket(db.db, {
    bucketName: "images"
  });
});

exports.uploadImage = (req, res) => {
  res.status(200).send("File uploaded successfully");
};

exports.getImage = (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          err: "Internal server error"
        });
      }
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "No files exist"
        });
      }
      bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    });
};
