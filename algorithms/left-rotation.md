# Sort merge

Rotate left operation on an array< br />
Shifts each element to the left< br />
For example [1,2,3,4,5] => [5,1,2,3,4]

## Implementation in Typescript

```javascript
function rotateArrayLeft(array: number, shiftAmount: number): number[] {
    const newArray: number[] = new Array(array.length);
    
    for(var i = 0; i < array.length; i++){
      const newLocation: number = (i + shiftAmount) % array.length;
      newArray[i] = array[newLocation];
    }

    return newArray.join(' ');
}

const arr = rotateArrayLeft([1,2,3,4,5], 4);
console.log(arr);
```