/**
 * Finds the first duplicate number 
 * for which the second occurrence has the minimal index
 * @param {int[]} arr [2, 1, 3, 5, 3, 2]
 * @return {int} first duplicate or -1
 */
function firstDuplicate(arr){
  const collection = new Set();
  
  for (element of arr) {
    if (collection.has(element)){
      
      return element;
    } else {
      collection.add(element);
    }   
  }

  return -1;
}
