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

// Constants
const PRODUCT_PER_PAGE = 12;

/* GET
 * Query can contains "filter", "search", "order"
 * filter => "brand", "color"
 * order => "asc:price", "asc:date", "desc:price", "desc:date"
 */
router.get("/", async (req, res) => {
  const { filter, order, search, page } = req.query;
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
     * Pagination
     */
    const startIn = (page - 1) * PRODUCT_PER_PAGE;
    const endIn = page * PRODUCT_PER_PAGE;
    const paginatedProds = searchedProds.slice(startIn, endIn);

    /**
     * Prepare filters that will be use in front
     * This needs to be applied after product data manipulation to
     * calculate count, colors, brand.
     */
    const feFilters = prepareFrontFilters(paginatedProds);

    /**
     * Response contains
     * Filters => To filter product
     * Products => To list product
     */
    res.json({
      filters: feFilters,
      currentPage: +page,
      prodPerPage: PRODUCT_PER_PAGE,
      products: paginatedProds,
    });
  } catch (err) {
    res.status(400).json({ message: "Something gone wrong!" });
  }
});

module.exports = router;
