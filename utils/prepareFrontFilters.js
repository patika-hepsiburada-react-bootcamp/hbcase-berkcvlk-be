/**
 * Filters
 * Prepare all filters that will be use in front
 * Variants desctructing from dummy product data
 */
const prepareFrontFilters = (allProducts, filteredProducts) => {
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
      allProducts

        // Destruct all different by field
        .reduce((arr, { [field]: { text, value } }) => {
          if (arr.findIndex((filt) => filt.value === value) !== -1) {
            return arr;
          }

          return [...arr, { text, value }];
        }, [])

        // Calculate product count in this filter
        .map((filt) => ({
          ...filt,
          count: filteredProducts.filter(
            (prod) => filt.value === prod[field].value
          ).length,
        }))
    );
  };

  return [
    {
      title: "Renk",
      type: "color",
      items: destructVariantsBy("color"),
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
      items: destructVariantsBy("brand"),
      multipleChoice: true,
    },
  ];
};

module.exports = prepareFrontFilters;
