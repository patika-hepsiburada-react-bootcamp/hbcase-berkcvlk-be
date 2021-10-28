const assert = require("chai").assert;
const {
  filterProducts,
  orderProducts,
  parseFilters,
  prepareFrontFilters,
  searchProducts,
} = require("../../utils");

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
    image: `/images/prod3.png`,
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
    image: `/images/prod1.png`,
    createdAt: "2021-02-12T00:00:00+03:00",
  },
  {
    id: 5,
    title: "Huawei P40 Lite Cep Telefonu",
    brand: {
      text: "Huawei",
      value: "huawei",
    },
    price: 1100,
    discountRate: 12,
    color: {
      text: "Beyaz",
      value: "beyaz",
    },
    image: `/images/prod1.png`,
    createdAt: "2021-12-23T00:00:00+03:00",
  },
];

describe("Filter Products functionality", () => {
  it("should return filtered products according given object", () => {
    const filters = {
      brand: ["apple", "samsung"],
      color: ["kirmizi"],
    };

    assert.deepEqual(filterProducts(products, filters), [products[1]]);
  });
});

describe("Order Products functionality", () => {
  it("should order products according given order-string", () => {
    const orderStr = "asc:price";

    assert.deepEqual(orderProducts(products, orderStr), [
      products[0],
      products[1],
      products[2],
    ]);
  });
});

describe("Parse Filters functionality", () => {
  it("should parse given filter query correctly", () => {
    const filter = "brand:huawei,samsung;color:kirmizi";

    assert.deepEqual(parseFilters(filter), {
      brand: ["huawei", "samsung"],
      color: ["kirmizi"],
    });
  });
});

describe("Prepare Front Filters functionality", () => {
  it("should prepare all avaliable filters for frontend", () => {
    assert.deepEqual(prepareFrontFilters(products, [products[0]]), [
      {
        title: "Renk",
        type: "color",
        items: [
          { text: "Gümüş", value: "gumus", count: 1 },
          { text: "Kırmızı", value: "kirmizi", count: 0 },
          { text: "Beyaz", value: "beyaz", count: 0 },
        ],
        multipleChoice: true,
      },
      {
        title: "Sıralama",
        type: "order",
        items: [
          { text: "En Düşük Fiyat", value: "asc:price" },
          { text: "En Yüksek Fiyat", value: "desc:price" },
          { text: "En Yeniler (AZ)", value: "asc:date" },
          { text: "En Yeniler (ZA)", value: "desc:date" },
        ],
      },
      {
        title: "Marka",
        type: "brand",
        items: [
          { text: "Apple", value: "apple", count: 1 },
          { text: "Samsung", value: "samsung", count: 0 },
          { text: "Huawei", value: "huawei", count: 0 },
        ],
        multipleChoice: true,
      },
    ]);
  });
});

describe("Search Products functionality", () => {
  it("return all products that contain searched key", () => {
    const searchedKey = "apple";

    assert.deepEqual(searchProducts(products, searchedKey), [products[0]]);
  });
});
