const products = require("./products");

/**
 * Keys to use with redis setter, getter
 */
const redisKeys = {
  products: "products",
  basket: "basket",
};

module.exports = { redisKeys, products };
