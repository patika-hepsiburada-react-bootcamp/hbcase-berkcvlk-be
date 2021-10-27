const { products } = require("../data");

/**
 * Filters
 * Prepare all filters that will be use in front
 * Variants desctructing from dummy product data
 */
const prepareFrontFilters = (prods) => {
  /**
   * Destructur all variants according the field
   * @param {string} field Which field needs to desctruct to the variants
   * @returns Variants according to given field
   */
  const destructVariantsBy = (field) => {
    return (
      // Use all product data to desctruct variants
      // Counts of variant will calculate according to given product
      // data to serve all counts
      products

        // Destruct all different by field
        .reduce((arr, { [field]: { text, value } }) => {
          if (arr.findIndex((filt) => filt.value === value) !== -1) {
            return arr;
          }

          return [
            ...arr,
            {
              text,
              value,

              // Calculate product count in this filter
              count: prods.filter((prod) => value === prod[field].value).length,
            },
          ];
        }, [])
    );
  };

  return [
    {
      title: "Renk",
      items: destructVariantsBy("color"),
      multipleChoice: true,
    },
    {
      title: "Sıralama",
      items: [
        { text: "En Düşük Fiyat", value: "asc:price" },
        { text: "En Yüksek Fiyat", value: "desc:price" },
        { text: "En Yeniler (AZ)", value: "asc:date" },
        { text: "En Yeniler (ZA)", value: "desc:date" },
      ],
    },
    {
      title: "Marka",
      items: destructVariantsBy("brand"),
      multipleChoice: true,
    },
  ];
};

module.exports = prepareFrontFilters;
