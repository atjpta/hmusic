const express = require("express");
const controllers = require('../controllers');
const ctl = controllers.favorite
const withoutDuplicates = require("../middlewares/withoutDuplicates");

module.exports = (app) => {
    const router = express.Router();
    router.route('/')
        .get(ctl.findAll)
        .post([withoutDuplicates.checkDuplicateFavorite], ctl.create)
        .delete(ctl.deleteAll)

    router.route('/:id')
        .get(ctl.findOne)
        .put(ctl.update)
        .delete(ctl.deleteOne)

    app.use("/api/favorite", router);
};