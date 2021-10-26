/**
 *@param {Array} products Products
 *@param {string} order Order
 */
const orderProducts = (products, order) => {
  if (!order) {
    return products;
  }

  // Example order, asc:price
  const [token, by] = order.split(":");

  const callbacks = {
    price: (prod) => prod["price"],
    date: (prod) => new Date(prod["createdAt"]).getTime(),
  };

  // Callbacks will be return specific field to sort array
  const sortBy = (cb) => {
    return products.sort((a, b) =>
      token === "asc" ? cb(a) - cb(b) : cb(b) - cb(a)
    );
  };

  return sortBy(callbacks[by]);
};

module.exports = orderProducts;
