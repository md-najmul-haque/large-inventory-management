const { createBrandServices } = require("../services/brand.service.js");

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