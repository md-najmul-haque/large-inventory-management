const { createStoreService, getStoresService, getStoresByIdService } = require("../services/store.service.js");

exports.createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the store",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the store"
        })
    }
}

exports.getStores = async (req, res, next) => {
    try {
        const result = await getStoresService();

        res.status(200).json({
            status: "success",
            message: "Successfully get the stores",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't find the store"
        })
    }
}

exports.getStoresById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getStoresByIdService(id);

        res.status(200).json({
            status: "success",
            message: "Successfully get the stores",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't find the store"
        })
    }
}