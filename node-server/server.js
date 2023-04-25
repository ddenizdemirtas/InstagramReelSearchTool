const mongoose = require('mongoose')
// mongoose.set('debug', true);
const Reel = require('./Models/reel')
const MiniSearch = require('minisearch')
const { default: test } = require('node:test')
const fs = require('fs');
const { json } = require('stream/consumers');

mongoose.connect("mongodb://localhost/reelsdb", console.log('connected'))
fs.readFile('reels_list.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    jsonData = JSON.parse(data);
})
async function run(searchText) {
    await Reel.deleteMany({})

    for (i in jsonData) {
        const reel = new Reel({id: jsonData[i]['short_code'], url: jsonData[i]['url'], title: jsonData[i]['on_screen_text'], transcription: jsonData[i]['transcription'], cover_image: jsonData[i]['cover_image']});
        await reel.save();
    }
    const test = await Reel.find({});
    const values = Array.from(test);

    let miniSearch = new MiniSearch({
        fields: ['title', 'transcription'],
        storeFields: ['url', 'cover_image']
    })
    miniSearch.addAll(values)

    let results = miniSearch.search(searchText).slice(0, 3);

    return results;
}

module.exports = run;