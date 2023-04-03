const express = require("express");
const controllers = require('../controllers');
const ctl = controllers.singer
module.exports = (app) => {
    const router = express.Router();
    router.route('/')
        .get(ctl.findAll)
        .post(ctl.create)
        .delete(ctl.deleteAll)

    router.route('/select')
        .get(ctl.findAllSelect)

    router.route('/:id')
        .get(ctl.findOne)
        .put(ctl.update)
        .delete(ctl.deleteOne)

    app.use("/api/singer", router);
};