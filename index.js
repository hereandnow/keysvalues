'use strict';
module.exports = function (data) {
  var keys = Object.keys(data).sort();
  var values = keys.map(function (key) {
    return data[key];
  });
  return {keys: keys, values: values};
};
