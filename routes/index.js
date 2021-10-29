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
    const searchedProds = searchProducts(filteredProds, search);

    /**
     * Prepare filters that will be use in front
     * This needs to be applied after product data manipulation to
     * calculate count, colors, brand.
     */
    const feFilters = prepareFrontFilters(products, searchedProds);

    /**
     * At last, order all products
     */
    const orderedProds = orderProducts(searchedProds, order);

    /**
     * Pagination
     */
    const startIn = (page - 1) * PRODUCT_PER_PAGE;
    const endIn = page * PRODUCT_PER_PAGE;
    const paginatedProds = orderedProds.slice(startIn, endIn);

    /**
     * Response contains
     * Filters => to filter product
     * Products => to list product
     * Current page => for pagination
     * Product per page => for pagination
     * Total Production Count => for pagination
     */
    res.json({
      filters: feFilters,
      currentPage: +page,
      prodPerPage: PRODUCT_PER_PAGE,
      totalProdCount: orderedProds.length,
      products: paginatedProds,
    });
  } catch (err) {
    res.status(400).json({ message: "Something gone wrong!" });
  }
});

module.exports = router;
