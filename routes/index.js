const express = require("express");
const router = express.Router();

const client = require("../redis_client");

client.set("deneme", "berk civelek");

/* GET home page. */
router.get("/", function (req, res, next) {
  client.get("deneme", (err, jobs) => {
    res.json({ test: jobs });
  });
});

module.exports = router;
