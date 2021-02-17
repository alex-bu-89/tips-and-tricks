/**
 * Simple get implementation
 * 
 * const obj = { 
 *   a: { 
 *     b: { 
 *       c: 'd' 
 *     },
 *     e: 'f'
 *   }
 * };
 * 
 * get(obj, 'a.b');   // { c : 'd' }
 * get(obj, 'a.b.c'); // 'd'
 * get(obj, 'a.e');   // 'f'
 * get(obj, 'a.x.e'); // undefined
 * get(obj, 'a.x.e', true); // true
 * get(obj, 'a.x.e', 'My default value'); // My default value
 */
function get(obj, path, defaultValue) {
  const keys = path.split('.');

  const result = keys.reduce((acc, key) => {
    if (!acc) return undefined;
    return acc[key];
  }, obj);

  return !result && defaultValue ? defaultValue : result;
}
