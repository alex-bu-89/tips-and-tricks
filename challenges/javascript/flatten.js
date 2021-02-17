/**
 * Simple flatten implementation
 * {flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
 * returns
 * [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]} list 
 */
function flatten(list) {
  const result = list.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
  return result;
}