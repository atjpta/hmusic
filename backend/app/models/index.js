const user = require("./user.models");
const roleM = require("./role.models");
const image = require('./image.models');
const genre = require("./genre.models")
const singer = require("./singer.models")
const artist = require("./artist.models")
const country = require("./country.models")
const music = require("./music.models")
const favorite = require("./favorite.models")
const playlist = require('./playlist.models')
const role = roleM.role

function innitDB (){
    roleM.initRole();
}

module.exports = {
    user,
    role,
    image,
    genre,
    singer,
    artist,
    country,
    music,
    favorite,
    playlist,
    innitDB,

}