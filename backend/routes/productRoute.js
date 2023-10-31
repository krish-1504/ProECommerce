const exp = require("express");
const { getAllProducts ,createProduct } = require("../controllers/productController");

const router = exp.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);


module.exports = router;