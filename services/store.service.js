const Store = require("../models/Store.js")

exports.createStoreService = async (data) => {
    const store = await Store.create(data)
    return store
}

exports.getStoresService = async () => {
    const stores = await Store.find({})
    return stores
}