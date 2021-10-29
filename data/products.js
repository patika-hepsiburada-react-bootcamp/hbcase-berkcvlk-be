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
    discountRate: 30,
    color: {
      text: "Gümüş",
      value: "gumus",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod3.png`,
    createdAt: "2021-01-12T00:00:00+03:00",
  },
  {
    id: 2,
    title:
      "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu Samsung Türkiye Garantili",
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
    image: `${process.env.NODE_SERVER_URL}/images/samsung1.jpeg`,
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
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
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
  {
    id: 5,
    title: "Huawei P40 Lite Cep Telefonu",
    brand: {
      text: "Huawei",
      value: "huawei",
    },
    price: 600,
    discountRate: 12,
    color: {
      text: "Beyaz",
      value: "beyaz",
    },
    image: `${process.env.NODE_SERVER_URL}/images/huawei1.jpeg`,
    createdAt: "2021-02-23T00:00:00+03:00",
  },
  {
    id: 6,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2200,
    discountRate: 10,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung1.jpeg`,
    createdAt: "2021-03-23T00:00:00+03:00",
  },
  {
    id: 7,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2100,
    discountRate: 12,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
    createdAt: "2020-10-23T00:00:00+03:00",
  },
  {
    id: 8,
    title: "Samsung Galaxy Note 10 Lite 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 990,
    discountRate: 8,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung3.jpeg`,
    createdAt: "2020-12-23T00:00:00+03:00",
  },
  {
    id: 9,
    title: "Samsung Galaxy S20 Ultra 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 1880,
    discountRate: 10,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung4.jpeg`,
    createdAt: "2021-11-23T00:00:00+03:00",
  },
  {
    id: 10,
    title: "Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2100,
    discountRate: 14,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi1.jpeg`,
    createdAt: "2021-11-11T00:00:00+03:00",
  },
  {
    id: 11,
    title: "Xiaomi Mi 11 Lite 8 GB Ram 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2400,
    discountRate: 12,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi2.jpeg`,
    createdAt: "2021-08-23T00:00:00+03:00",
  },
  {
    id: 12,
    title: "Xiaomi Mi Note 10 Lite 64 GB (Xiaomi Türkiye Garantiili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 1300,
    discountRate: 10,
    color: {
      text: "Mor",
      value: "mor",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi3.jpeg`,
    createdAt: "2021-06-15T00:00:00+03:00",
  },
  {
    id: 13,
    title: "Xiaomi Mi 10T 128 GB 8 GB RAM (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 1400,
    discountRate: 10,
    color: {
      text: "Gri",
      value: "gri",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi4.jpeg`,
    createdAt: "2021-07-15T00:00:00+03:00",
  },
  {
    id: 14,
    title: "Apple Iphone 11 Pro",
    brand: {
      text: "Apple",
      value: "apple",
    },
    price: 1900,
    discountRate: 10,
    color: {
      text: "Gümüş",
      value: "gumus",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod2.png`,
    createdAt: "2020-12-10T00:00:00+03:00",
  },
  {
    id: 15,
    title:
      "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu Samsung Türkiye Garantili",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 1850,
    discountRate: 8,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
    createdAt: "2021-03-20T00:00:00+03:00",
  },
  {
    id: 16,
    title: "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 700,
    discountRate: 12,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung4.jpeg`,
    createdAt: "2021-10-05T00:00:00+03:00",
  },
  {
    id: 17,
    title: "Apple Iphone 12 Pro Max",
    brand: {
      text: "Apple",
      value: "apple",
    },
    price: 3900,
    discountRate: 24,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod4.png`,
    createdAt: "2020-11-20T00:00:00+03:00",
  },
  {
    id: 18,
    title: "Huawei P40 Lite Cep Telefonu",
    brand: {
      text: "Huawei",
      value: "huawei",
    },
    price: 1600,
    discountRate: 12,
    color: {
      text: "Beyaz",
      value: "beyaz",
    },
    image: `${process.env.NODE_SERVER_URL}/images/huawei1.jpeg`,
    createdAt: "2021-04-23T00:00:00+03:00",
  },
  {
    id: 19,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2200,
    discountRate: 10,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung1.jpeg`,
    createdAt: "2021-05-12T00:00:00+03:00",
  },
  {
    id: 20,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 3100,
    discountRate: 12,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
    createdAt: "2020-11-23T00:00:00+03:00",
  },
  {
    id: 21,
    title: "Samsung Galaxy Note 10 Lite 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 1990,
    discountRate: 8,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung3.jpeg`,
    createdAt: "2020-06-23T00:00:00+03:00",
  },
  {
    id: 22,
    title: "Samsung Galaxy S20 Ultra 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2880,
    discountRate: 12,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung4.jpeg`,
    createdAt: "2021-09-23T00:00:00+03:00",
  },
  {
    id: 23,
    title: "Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2600,
    discountRate: 12,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi1.jpeg`,
    createdAt: "2021-09-15T00:00:00+03:00",
  },
  {
    id: 24,
    title: "Xiaomi Mi 11 Lite 8 GB Ram 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2800,
    discountRate: 12,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi2.jpeg`,
    createdAt: "2021-11-01T00:00:00+03:00",
  },
  {
    id: 25,
    title: "Xiaomi Mi Note 10 Lite 64 GB (Xiaomi Türkiye Garantiili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2300,
    discountRate: 10,
    color: {
      text: "Mor",
      value: "mor",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi3.jpeg`,
    createdAt: "2021-07-15T00:00:00+03:00",
  },
  {
    id: 26,
    title: "Xiaomi Mi 10T 128 GB 8 GB RAM (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 3400,
    discountRate: 10,
    color: {
      text: "Gri",
      value: "gri",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi4.jpeg`,
    createdAt: "2021-08-15T00:00:00+03:00",
  },
  {
    id: 27,
    title: "Huawei P40 Lite Cep Telefonu",
    brand: {
      text: "Huawei",
      value: "huawei",
    },
    price: 1600,
    discountRate: 12,
    color: {
      text: "Beyaz",
      value: "beyaz",
    },
    image: `${process.env.NODE_SERVER_URL}/images/huawei1.jpeg`,
    createdAt: "2021-01-13T00:00:00+03:00",
  },
  {
    id: 28,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2400,
    discountRate: 12,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung1.jpeg`,
    createdAt: "2021-05-23T00:00:00+03:00",
  },
  {
    id: 29,
    title:
      "Samsung Galaxy S20 FE 128 GB Snapdragon (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2200,
    discountRate: 14,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
    createdAt: "2021-10-23T00:00:00+03:00",
  },
  {
    id: 30,
    title: "Samsung Galaxy Note 10 Lite 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 3990,
    discountRate: 12,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung3.jpeg`,
    createdAt: "2020-11-22T00:00:00+03:00",
  },
  {
    id: 31,
    title: "Samsung Galaxy S20 Ultra 128 GB (Samsung Türkiye Garantili)",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2880,
    discountRate: 10,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung4.jpeg`,
    createdAt: "2021-09-23T00:00:00+03:00",
  },
  {
    id: 32,
    title: "Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2499,
    discountRate: 14,
    color: {
      text: "Yeşil",
      value: "yesil",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi1.jpeg`,
    createdAt: "2021-07-11T00:00:00+03:00",
  },
  {
    id: 33,
    title: "Xiaomi Mi 11 Lite 8 GB Ram 128 GB (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 3400,
    discountRate: 12,
    color: {
      text: "Siyah",
      value: "siyah",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi2.jpeg`,
    createdAt: "2021-08-12T00:00:00+03:00",
  },
  {
    id: 34,
    title: "Xiaomi Mi Note 10 Lite 64 GB (Xiaomi Türkiye Garantiili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 2300,
    discountRate: 10,
    color: {
      text: "Mor",
      value: "mor",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi3.jpeg`,
    createdAt: "2021-06-16T00:00:00+03:00",
  },
  {
    id: 35,
    title: "Xiaomi Mi 10T 128 GB 8 GB RAM (Xiaomi Türkiye Garantili)",
    brand: {
      text: "Xiaomi",
      value: "xiaomi",
    },
    price: 3400,
    discountRate: 12,
    color: {
      text: "Gri",
      value: "gri",
    },
    image: `${process.env.NODE_SERVER_URL}/images/xiaomi4.jpeg`,
    createdAt: "2021-07-16T00:00:00+03:00",
  },
  {
    id: 36,
    title: "Apple Iphone 11 Pro",
    brand: {
      text: "Apple",
      value: "apple",
    },
    price: 2950,
    discountRate: 10,
    color: {
      text: "Gümüş",
      value: "gumus",
    },
    image: `${process.env.NODE_SERVER_URL}/images/prod2.png`,
    createdAt: "2020-12-24T00:00:00+03:00",
  },
  {
    id: 37,
    title:
      "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu Samsung Türkiye Garantili",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 2850,
    discountRate: 8,
    color: {
      text: "Mavi",
      value: "mavi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung2.jpeg`,
    createdAt: "2021-04-20T00:00:00+03:00",
  },
  {
    id: 38,
    title: "Samsung A7 Max Pro Maxi Samsung Samsung S5 Cep Telefonu",
    brand: {
      text: "Samsung",
      value: "samsung",
    },
    price: 1700,
    discountRate: 12,
    color: {
      text: "Kırmızı",
      value: "kirmizi",
    },
    image: `${process.env.NODE_SERVER_URL}/images/samsung4.jpeg`,
    createdAt: "2021-11-05T00:00:00+03:00",
  },
];

module.exports = products;
