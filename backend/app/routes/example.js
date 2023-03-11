// có 6 router chung là thêm(create), sửa (update), lấy tất cả (findAll), lấy theo id (findOne), xóa theo id (deleteOne), xóa tất cả(deleteAll)
// sẽ có các router khác đi kèm theo nữa tùy nào thực tế
// chú ý chỉnh ctl và url lại 

const express = require("express");
const controllers = require('../controllers');
const ctl = controllers.artist
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

    app.use("/api/artist", router); 
};