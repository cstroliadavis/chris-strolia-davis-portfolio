/**
 * Takes a list of tuples and converts them to objects with the property names provided
 * @param arr {Array[]} An array of arrays
 * @param fields {string} A list of property names (in order) to set as the tuple index property
 * @return {object[]}
 * @example
 * toObjectArray([[1, 2],[1, 3]], 'start', 'end') // [{start: 1, end: 2}, {start: 1, end: 3}]
 */
export function toObjectArray(arr, ...fields) {
  return arr.map((list) => {
    return fields.reduce((obj, name, i) => ({...obj, [name]: list[i]}), {});
  })
}
