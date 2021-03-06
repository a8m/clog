'use strict';

/**
 * Flattens a nested array (the nesting can be to any depth).
 * If you pass shallow, the array will only be flattened a single level
 * @param array
 * @param i
 * @returns {Array}
 */
function flatten(array, i) {
  i = ~~i;

  if(i >= array.length)
    return array;

  if(Array.isArray(array[i])) {
    return flatten(array.slice(0,i)
      .concat(array[i], array.slice(i+1)), i);
  }

  return flatten(array, i+1);
}

/**
 * get array and filter duplicate members
 * @param array
 * @returns {Array}
 */
function uniq(array) {
  return array.filter(function (elm, pos, self) {
    return self.indexOf(elm) === pos;
  })
}

/**
 * test if it's object
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
  return null !== obj && "object" === typeof obj;
}

/**
 * test if object is undefined
 * @param obj
 * @returns {boolean}
 */
function isUndefined(obj) {
  return "undefined" === typeof obj;
}

module.exports = {
  flatten: flatten,
  uniq: uniq,
  isObject: isObject,
  isUndefined: isUndefined
};