/**
 *@param {Object} filters Request query filter object to parse filters
 *@returns Filter object that contains related array
 */
const parseFilters = (filters) => {
  if (!filters) {
    return null;
  }

  return filters.split(";").reduce((obj, filt) => {
    const [field, value] = filt.split(":");

    // Value may have multiple, so split to array
    const valueArr = value.split(",");

    return {
      ...obj,
      [field]: [...valueArr],
    };
  }, {});
};

module.exports = parseFilters;
