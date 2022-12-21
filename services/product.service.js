const Brand = require("../models/Brands")
const Product = require("../models/Product")

exports.createProductService = async (data) => {
    const product = await Product.create(data)
    const { _id: productId, brand } = product

    const res = await Brand.updateOne({ _id: brand.id }, { $push: { products: productId } })
    console.log(res.nModified)

    return product
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


exports.updateProductService = async (productId, data) => {
    // const updateProduct = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    // const updateProduct = await Product.updateOne({ _id: productId }, { $inc: data }, { runValidators: true })

    // update product by findById
    const product = await Product.findById(productId);
    const updateProduct = await product.set(data).save()


    return updateProduct;
}

exports.bulkUpdateProductService = async (data) => {
    // const result = await Product.updateMany({ _id: data.ids }, data.data, { runValidators: true })

    const products = [];

    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data)) // we can't use await inside loop because forEach synchronous function.

    })
    const result = await Promise.all(products)
    return result;

}


exports.deleteProductByIdService = async (id) => {
    const result = Product.deleteOne({ _id: id })
    return result;

}

exports.bulkDeleteProductService = async (ids) => {
    const result = await Product.deleteMany({ _id: ids }, { runValidators: true })

    return result;

}
