# Sort merge

Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

## Implementation in Typescript

```javascript
function mergeSort(arr: number[]): number[] {
  // return once we hit an array with a single item
  if (arr.length === 1) {
    return arr;
  }

  const middle: number = Math.floor(arr.length / 2);
  const left: number[] = arr.slice(0, middle);
  const right: number[] = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left: number[], right: number[]) {
  let result: number[] = [];
  let indexLeft: number = 0;
  let indexRight: number = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3]
console.log(mergeSort(list))
```