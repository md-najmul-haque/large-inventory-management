const Product = require("../models/Product")


exports.createProductService = async (data) => {
    const product = new Product(data)
    const result = await product.save()
    return result
}

exports.getProductsService = async (filters, queries) => {
    const product = await Product.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy) // since query data comes as a object. so are not using {} inside find method

    const totalProducts = await Product.countDocuments(filters)
    const pageCount = Math.ceil(totalProducts / queries.limit)

    return { totalProducts, pageCount, product };
}