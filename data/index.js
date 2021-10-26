const products = require("./products");

/**
 * Keys to use with redis setter, getter
 */
const redisKeys = {
  products: "products",
};

module.exports = { redisKeys, products };
