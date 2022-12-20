const express = require("express");
const { getCategories, createCategory } = require("../controller/category.controller");

const categoryRoute = express.Router();


categoryRoute.route("/").get(getCategories).post(createCategory);

module.exports = categoryRoute;