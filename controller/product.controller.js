const { createProductService, getProductsService, updateProductService, bulkUpdateProductService } = require("../services/product.service")


exports.createProduct = async (req, res, next) => {
    // there have two ways of save data in backend, one is save another one is create

    try {
        //create
        // const result = await Product.create(req.body)

        // save
        // const product = new Product(req.body)

        // if we use save method then we can validate like this way
        // if (product.quantity === 0) {
        //     product.status = 'out-of-stock'

        // }
        // const result = await product.save()

        const result = await createProductService(req.body)

        result.logger()


        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to insert data',
            error: error.message
        })
    }

}

exports.getProducts = async (req, res, next) => {
    try {
        // or operator used in find method
        // const result = await Product.find({ $or: [{ _id: "6388d1571de1789cd3666a07" }, { name: "sfdkf" }] })

        // ne (not equal) operator used in find method
        // const result = await Product.find({ status: { $ne: "out-of-stock" } })

        // gt (greater that) / gte(greater that or equal) operator used in find method
        // const result = await Product.find({ quantity: { $gt: 100 } })
        // const result = await Product.find({ quantity: { $gte: 100 } })

        // in operator used in find method
        // const result = await Product.find({ name: { $in: ['rice', 'dal'] } })

        // get only specific property
        // const result = await Product.find({}, 'name quantity')

        // if we want to remove some special property
        // const result = await Product.find({}, '-name -quantity')


        // if we want to remove some special property and limit it
        // const result = await Product.find({}, '-name -quantity').limit(1)

        // if we want to sort by descending order
        // const result = await Product.find({}).sort({ quantity: -1 })

        // query builders in mongoose

        // const result = await Product.find({}).where("name").equals("rice").where("quantity").gt(100).lt(600)
        // const result = await Product.find({})
        //     .where("name").equals(/\w/)
        //     .where("quantity").gt(100).lt(600)
        //     .limit(2).sort({ quantity: -1 })


        //find by id
        // const result = await Product.findById('6388d1571de1789cd3666a07')

        // const result = await Product.findById(undefined) // data load successfully empty data
        // const result = await Product.find(undefined) // data load successfully all data

        let filters = { ...req.query }

        console.log(filters)

        // exclude filed
        const excludeFields = ["sort", "page", "limit"]
        excludeFields.forEach(filed => delete filters[filed])

        console.log(filters)
        // console.log(req.query)

        //{price: {$gt:50}}
        //{price: {gt:'50'}}; we get it if we send data from postman like price[gt]=50

        let filtersString = JSON.stringify(filters);
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filtersString)

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
            // console.log(sortBy)
        }

        if (req.query.fields) {
            const sortBy = req.query.fields.split(',').join(' ')
            queries.fields = sortBy
            // console.log(sortBy)
        }

        if (req.query.page) {
            const { page = 1, limit = 2 } = req.query

            const skip = (page - 1) * parseInt(limit)
            queries.skip = skip
            queries.limit = parseInt(limit)
            // product 40
            // each page 10 product
            // page 1 -> 1-10
            // page 2 -> 11-20
            // page 3 -> 21-30 if we want to show page 3 then we have to skip 1-20 -> (3-1)*limit
            // page 4 -> 31-40

        }

        const result = await getProductsService(filters, queries)

        res.status(200).json({
            status: 'success',
            message: 'Data load successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to load data',
            error: error.message
        })

    }
}


exports.updateProduct = async (req, res, next) => {
    try {

        const { id } = req.params

        const result = await updateProductService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'Data updated successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to update data',
            error: error.message
        })
    }
}

exports.bulkUpdateProduct = async (req, res, next) => {
    try {
        const result = await bulkUpdateProductService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Data updated successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to update data',
            error: error.message
        })
    }
}
