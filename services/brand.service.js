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

exports.updateBrandService = async (id, data) => {
    const brand = await Brand.updateOne({ _id: id }, data, { runValidators: true })
    return brand
}