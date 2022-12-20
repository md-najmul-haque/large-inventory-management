const { createBrandServices, getBrandsService, getBrandByIdServices } = require("../services/brand.service.js");

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