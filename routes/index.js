const express = require("express");
const router = express.Router();

// Redis
const { redisKeys } = require("../data");
const { get } = require("../redis/client");

// Utils to provide filter object and filter data by provided object
const {
  parseFilters,
  filterProducts,
  orderProducts,
  searchProducts,
  prepareFrontFilters,
} = require("../utils");

/* GET
 * Query can contains "filter", "search", "order"
 * filter => "brand", "color"
 * order => "asc:price", "asc:date", "desc:price", "desc:date"
 */
router.get("/", async (req, res) => {
  const { filter, order, search } = req.query;
  const filters = parseFilters(filter);

  try {
    const response = await get(redisKeys.products);
    const products = await JSON.parse(response);

    /**
     * Manipulate data by query params
     * Manipulating order can be change. All utils will return previous
     * product data if there is no valid/exist parameter
     */
    const filteredProds = filterProducts(products, filters);
    const orderedProds = orderProducts(filteredProds, order);
    const searchedProds = searchProducts(orderedProds, search);

    /**
     * Prepare filters that will be use in front
     * This needs to be applied after product data manipulation to
     * calculate count, colors, brand.
     */
    const feFilters = prepareFrontFilters(searchedProds);

    /**
     * Response contains
     * Filters => To filter product
     * Products => To list product
     */
    res.json({
      filters: feFilters,
      products: searchedProds,
    });
  } catch (err) {
    res.status(400).json({ message: "Something gone wrong!" });
  }
});

module.exports = router;
