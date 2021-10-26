const express = require("express");
const router = express.Router();

const { get } = require("../redis/client");

/* GET home page. */
router.get("/", async (req, res) => {
  console.log(req.query);

  const products = await get("products").catch((err) => {
    if (err) {
      console.log(error);
    }
  });

  res.json(JSON.parse(products));
});

module.exports = router;
