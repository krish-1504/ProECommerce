const exp = require("express");
const { getAllProducts } = require("../controllers/productController");

const router = exp.Router();

router.route("/products").get(getAllProducts)


module.exports = router;