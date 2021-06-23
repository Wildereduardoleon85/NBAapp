const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    team: {type: String, required: true},
    poster: {type: String, required: true}
});

module.exports = mongoose.model('player', PlayerSchema);