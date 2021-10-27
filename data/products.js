const dotenv = require("dotenv");
dotenv.config();

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
    image: `${process.env.NODE_SERVER_URL}/images/prod3.png`,
    createdAt: "2021-01-12T00:00:00+03:00",
  },
  {
    id: 2,
    title: "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 850,
    discountRate: 8,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod1.png`,
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
    image: `${process.env.NODE_SERVER_URL}/images/prod2.png`,
    createdAt: "2021-03-12T00:00:00+03:00",
  },
  {
    id: 4,
    title: "Apple Iphone 12 Pro Max",
    brand: {
      text: "Apple",
      value: "apple",
    },
    price: 900,
    discountRate: 12,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod4.png`,
    createdAt: "2021-01-12T00:00:00+03:00",
  },
];

module.exports = products;
