/**
 * Rotate left operation on an array
 * Shifts each element to the left
 * For example [1,2,3,4,5] => [5,1,2,3,4]
 */
function rotateArrayLeft(array, shiftAmount) {
    var newArray = new Array(array.length);
    for(var i = 0; i < array.length; i++){
      var newLocation = (i + shiftAmount) % array.length;
      newArray[i] = array[newLocation];
    }

    return newArray.join(' ');
}

var arr = rotateArrayLeft([1,2,3,4,5], 4);
console.log(arr);
