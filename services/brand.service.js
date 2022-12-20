const Brand = require("../models/Brands.js");

exports.createBrandServices = async (data) => {
    const result = await Brand.create(data)
    return result;
}

exports.getBrandsService = async () => {
    const brands = await Brand.find({})
    return brands
}

exports.getBrandByIdServices = async (id) => {
    const brand = await Brand.findOne({ _id: id })
    return brand

}