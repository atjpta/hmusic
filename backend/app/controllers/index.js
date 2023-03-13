const auth = require('./auth.controller')
const user = require('./users.controller')
const genre = require('./genre.controller')
const artist = require('./artist.controller')
const singer = require('./singer.controller')
const country = require('./country.controller')
const music = require('./music.controller')
const favorite = require('./favorite.controller')
const playlist = require('./playlist.controller')

module.exports = {
    auth,
    user,
    genre,
    artist,
    singer,
    country,
    music,
    favorite,
    playlist,
}
