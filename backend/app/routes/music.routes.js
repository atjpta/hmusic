const express = require("express");
const controllers = require('../controllers');
const ctl = controllers.music
module.exports = (app) => {
    const router = express.Router();
    router.route('/')
        .get(ctl.findAll)
        .post(ctl.create)
        .delete(ctl.deleteAll)

    router.route('/:id')
        .get(ctl.findOne)
        .put(ctl.update)
        .delete(ctl.deleteOne)
    
    router.route('/:type/:id/:page')
        .get(ctl.findAllTypePage)

    router.route('/:page')
        .get(ctl.findAllPage)

    app.use("/api/music", router);
};