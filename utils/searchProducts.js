/**
 * Filter by search key
 */
const searchProducts = (products, key) => {
  if (!key) {
    return products;
  }

  return products.filter((prod) =>
    prod.title.toLowerCase().includes(key.toLowerCase())
  );
};

module.exports = searchProducts;
