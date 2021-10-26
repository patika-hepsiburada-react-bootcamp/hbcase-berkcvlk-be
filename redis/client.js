const redis = require("redis");
const { promisify } = require("util");
const { redisKeys, products } = require("../data");

// Create redis client
const client = redis.createClient(process.env.REDIS_URL);

// Make setter and gett of redis client async
const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

// Load data when server is up
const loadData = async () => {
  await set(redisKeys.products, JSON.stringify(products));
  await set(redisKeys.basket, JSON.stringify({ items: [] }));
};

loadData();

module.exports = { set, get };
