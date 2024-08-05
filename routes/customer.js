
const express = require('express');

const router = express.Router();

router.route('/home').get()
// router.route('/products').get(getProducts);
// router.route('/product/:id').get(getSingleProduct);

module.exports = router;