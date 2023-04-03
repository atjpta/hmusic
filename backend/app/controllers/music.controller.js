const mongoose = require("mongoose");
const DB = require("../models");
const model = DB.music;
const ObjectId = mongoose.Types.ObjectId;

exports.create = async (req, res, next) => {
    const modelO = new model({
        id_user: req.body.id_user,
        name: req.body.name,
        time: req.body.time,
        artist: req.body.artist,
        singer: req.body.singer,
        genre: req.body.genre,
        country: req.body.country,
        view: 0,
        url: req.body.url,
        url_image: req.body.url_image,
    })
    try {
        const document = modelO.save();
        return res.send({ Message: 'tạo thành công' });
    } catch (error) {
        return next(
            res.status(500).json({ Message: 'không  thể create model' + error })
        )
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const document = await model.find().populate({
            path: 'artist singer genre country',
            select: 'id name',
        }).sort({ createdAt: -1 })
        return res.json(document);
    } catch (error) {
        return next(
            res.status(500).json({ Message: 'không  thể  lấy findAll' + error })
        )
    }
};

exports.findAllPage = async (req, res, next) => {
    const { page } = req.params
    try {
        const document = await model.find().populate({
            path: 'artist singer genre country',
            select: 'id name',
        })
            .sort({ createdAt: -1 })
            .limit(5)
            .skip(5 * page)
        return res.json(document);
    } catch (error) {
        return next(
            res.status(500).json({ Message: 'không  thể  lấy findAll' + error })
        )
    }
};

exports.findAllTypePage = async (req, res, next) => {
    const { page, type, id } = req.params
    try {
        const document = await model.find({ [type]: { $gte: id } })
            .populate('artist singer genre country', 'id name')
            .sort({ createdAt: -1 })
            .limit(5)
            .skip(5 * page);

        if (!document) {
            return next(res.status(404).json({ Message: "không thể tìm thấy Music" }));
        }
        return res.json(document);
    } catch (error) {
        return next(
            res.status(500).json({ Message: 'không  thể  lấy Music' + error })
        )
    }
};

exports.findOne = async (req, res, next) => {
    const { id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
        const document = await model.findOne(condition).populate({
            path: 'artist singer genre country',
            select: 'id name',
        })
        if (!document) {
            return next(res.status(404).json({ Message: "không thể tìm thấy model" }));
        }
        return res.json(document);
    } catch (error) {
        return next(
            res.status(500).json({ Message: 'không  thể  lấy findAll' + error })
        )
    }
}

exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(
            res.status(400).json({ Message: "thông tin không thế thay đổi" })
        )
    }
    const { id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
        const document = await model.findByIdAndUpdate(condition, req.body, {
            new: true
        });
        if (!document) {
            return next(res.status(404).json({ Message: "không thể tìm thấy model" }));
        }
        return res.send({ message: "đã update thành công", body: req.body });
    }
    catch (error) {
        console.log(error);
        return next(
            res.status(500).json({ Message: ` không thể update model với id = ${req.params.id} ` })
        )
    }
}


exports.deleteOne = async (req, res, next) => {
    const { id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
        const document = await model.findOneAndDelete(condition);
        if (!document) {
            return next(res.status(404).json({ Message: "không thể tìm thấy model" }));
        }
        return res.send({ message: "đã xóa model thành công" });
    }
    catch (error) {
        return next(
            res.status(500).json({ Message: ` không thể xóa model với id = ${req.params.id} ` + error })
        )
    }
}
exports.deleteAll = async (req, res, next) => {
    try {
        const data = await model.deleteMany({});
        return res.send({ message: `${data.deletedCount}  model đã xóa thành công` });
    }
    catch (error) {
        return next(
            res.status(500).json({ Message: ` có lỗi khi đang xóa tất cả model` + error })
        )
    }
}
