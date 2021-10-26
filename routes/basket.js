const express = require("express");
const router = express.Router();

// Redis
const { redisKeys } = require("../data");
const { get, set } = require("../redis/client");

/**
 * GET
 * Return basket items if it exists
 */
router.get("/", async (_, res) => {
  try {
    const response = await get(redisKeys.basket);
    const basket = await JSON.parse(response);

    res.json(basket);
  } catch (err) {
    res.json({
      message: "No item found!",
    });
  }
});

/**
 * POST
 * Add new item to the basket
 */
router.post("/", async (req, res) => {
  const productId = +req.body.productId;

  try {
    // Basket
    const basketRes = await get(redisKeys.basket);
    const basket = await JSON.parse(basketRes);

    // Products
    const prodsRes = await get(redisKeys.products);
    const products = await JSON.parse(prodsRes);

    // Find the product by id
    const product = products.find((prod) => prod.id === productId);

    if (!product) {
      throw Error("Item not found!");
    }

    // Check if the item exists in basket
    const isExists =
      basket.items.findIndex((i) => i.productId === productId) !== -1;

    if (isExists) {
      throw Error("Item already exists in the basket!");
    }

    // Update basket in memory
    basket.items.push({ productId: product.id });
    await set(redisKeys.basket, JSON.stringify(basket));

    // Return new basket items to update front
    res.json(basket);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
