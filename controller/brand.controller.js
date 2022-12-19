
exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the brand"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the brand"
        })
    }
}