/**
 * Keys to use with redis setter, getter
 */
const redisKeys = {
  products: "products",
};

/**
 * Brands
 */
const brands = {
  apple: "Apple",
  samsung: "Samsung",
};

/**
 * Colors
 */
const colors = {
  kirmizi: "Kırmızı",
  gumus: "Gümüş",
};

/**
 * Dummy Products
 */
const products = [
  {
    id: 1,
    title: "Apple Iphone 11",
    brand: {
      text: "Apple",
      value: "apple",
    },
    price: 900,
    discountRate: 12,
    color: {
      text: "Gümüş",
      value: "gumus",
    },
    createdAt: "2021-01-12T00:00:00+03:00",
  },
  {
    id: 2,
    title: "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 800,
    discountRate: 8,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    createdAt: "2021-02-12T00:00:00+03:00",
  },
  {
    id: 3,
    title: "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 800,
    discountRate: 8,
    color: {
      text: "Gümüş",
      value: "gumus",
    },
    createdAt: "2021-02-12T00:00:00+03:00",
  },
];

module.exports = { redisKeys, products, colors, brands };
