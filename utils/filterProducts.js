/**
 * @param {Array} products All products
 * @param {Object} filters Object that return from parseFilters
 */
const filterProducts = (products, filters) => {
  if (!filters) {
    return products;
  }

  return products.filter((prod) => {
    // Initial true to check all filters return true;
    let checked = true;

    Object.entries(filters).forEach((filter) => {
      const [name, arr] = filter;

      // If any of filters doesn't include with the product
      // related field, make boolean false. This will provide the
      // current product item will not be in the array
      if (!arr.includes(prod[name].value)) {
        checked = false;
      }
    });

    return checked;
  });
};

module.exports = filterProducts;
