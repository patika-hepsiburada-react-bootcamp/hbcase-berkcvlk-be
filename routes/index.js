const express = require("express");
const router = express.Router();

// Redis
const { redisKeys } = require("../data");
const { get } = require("../redis/client");

// Utils to provide filter object and filter data by provided object
const parseFilters = require("../utils/parseFilters");
const filterProducts = require("../utils/filterProducts");
const orderProducts = require("../utils/orderProducts");

/* GET
 * Query can contains "filter", "search", "order"
 * filter => "brand", "color"
 * order => "asc:price", "asc:date", "desc:price", "desc:date"
 */
router.get("/", async (req, res) => {
  const filters = parseFilters(req.query.filter);
  const order = req.query.order;

  try {
    const response = await get(redisKeys.products);
    const products = await JSON.parse(response);

    const filteredProds = filterProducts(products, filters);
    const orderedProds = orderProducts(filteredProds, order);

    res.json(orderedProds);
  } catch (err) {
    res.status(400).json({ message: "Something gone wrong!" });
  }
});

module.exports = router;
