const Store = require("../models/Store.js")

exports.createStoreService = async (data) => {
    const store = await Store.create(data)
    return store
}