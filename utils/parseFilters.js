/**
 *@param {Object} qFilter Request query filter object to parse filters
 *@returns Filter object that contains related array
 */
const parseFilters = (qFilter) => {
  if (!qFilter) {
    return null;
  }

  return query.filter.split(";").reduce((obj, filt) => {
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
