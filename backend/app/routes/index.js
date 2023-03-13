const auth = require('./auth.routes');
const users = require('./users.routes');
const genre = require('./genre.routes');
const artist = require('./artist.routes')
const singer = require('./singer.routes')
const country = require('./country.routes')
const music = require('./music.routes')
const favorite = require('./favorite.routes');
const playlist = require('./playlist.routes')

exports.Start = (app) => {
    auth(app)
    users(app)
    genre(app)
    artist(app)
    singer(app)
    country(app)
    music(app)
    favorite(app)
    playlist(app)
}
