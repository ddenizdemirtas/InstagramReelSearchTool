const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reelSchema = new Schema({
    id: {
        type: String
    },
    url: {
        type: String
    },
    title: {
        type: String
    },
    transcription: {
        type: String
    },
    cover_image: {
        type: String
    }
})

module.exports = mongoose.model("Reel", reelSchema);

// // myModel.find({}, (err, docs) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }
// //     console.log(docs);
// //   });