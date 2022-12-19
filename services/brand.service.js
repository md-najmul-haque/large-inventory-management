const Brand = require("../models/Brands.js");

exports.createBrandServices = async (data) => {
    const result = await Brand.create(data)
    return result;
}