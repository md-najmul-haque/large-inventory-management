const { createBrandServices, getBrandsService, getBrandByIdServices, updateBrandService } = require("../services/brand.service.js");

exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandServices(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the brand",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the brand"
        })
    }
}

exports.getBrands = async (req, res, next) => {
    try {
        const result = await getBrandsService();

        res.status(200).json({
            status: "success",
            message: "Successfully load all the brands",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands"
        })
    }
}

exports.getBrandById = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await getBrandByIdServices(id);

        if (!brand) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a brand with this id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully get the brand",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands"
        })
    }
}

exports.updateBrand = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await updateBrandService(id, req.body);

        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't update the brand with this id",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Successfully update the brand",
            result: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the brands"
        })
    }
}