const express = require("express");
const router = express.Router();

// Redis
const { redisKeys } = require("../data");
const { get } = require("../redis/client");

// Utils to provide filter object and filter data by provided object
const parseFilters = require("../utils/parseFilters");
const filterProducts = require("../utils/filterProducts");

/* GET
 * Query can contains "filter", "search", "order"
 * filter => "brand", "color"
 * order => "asc:price", "asc:date", "desc:price", "desc:date"
 */
router.get("/", async (req, res) => {
  const filters = parseFilters(req.query.filter);

  try {
    const response = await get(redisKeys.products);
    const products = await JSON.parse(response);

    if (!filters) {
      res.json(products);
    }

    res.json(filterProducts(products, filters));
  } catch (err) {
    res.status(400).json({ message: "Something gone wrong!" });
  }
});

module.exports = router;
