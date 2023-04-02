const express = require("express");
const controllers = require('../controllers');
const ctl = controllers.user
module.exports = (app) => {
    const router = express.Router();
    router.route('/')
        .get(ctl.findAll)
        .delete(ctl.deleteAll)

    router.route('/:id')
        .get(ctl.findOne)
        .put(ctl.update)
        .delete(ctl.deleteOne)

    app.use("/api/user", router);
};