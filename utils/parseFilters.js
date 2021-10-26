/**
 *@param {Object} filters Request query filter object to parse filters
 *@returns Filter object that contains related array
 */
const parseFilters = (filters) => {
  if (!filters) {
    return null;
  }

  return filters.split(";").reduce((obj, filt) => {
    // Destruct prop and value
    const [field, value] = filt.split(":");

    // Value may have multiple, so split to array
    const valueArr = value.split(",");

    // Set related obj field
    return {
      ...obj,
      [field]: [...valueArr],
    };
  }, {});
};

module.exports = parseFilters;
