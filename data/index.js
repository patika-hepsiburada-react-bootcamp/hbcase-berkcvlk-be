/**
 * Keys to use with redis setter, getter
 */
const redisKeys = {
  products: "products",
};

/**
 * Dummy Products
 */
const products = [
  {
    id: 1,
    title: "Apple Iphone 11",
    brand: "Apple",
    price: 900,
    discountRate: 12,
    color: "Gümüş",
    createdAt: "2021-01-12T00:00:00+03:00",
  },
  {
    id: 2,
    title:
      "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11, Apple Iphone 11 Cep Telefonu",
    brand: "Apple",
    price: 800,
    discountRate: 8,
    color: "Kırmızı",
    createdAt: "2021-02-12T00:00:00+03:00",
  },
];

module.exports = { redisKeys, products };
