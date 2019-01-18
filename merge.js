function split(arr){
  const middle = Math.floor(arr.length/2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return [left, right];
}

function merge(left, right, fn = (a,b) => a < b ? -1 : 1){
  let merged = [];
  while(left.length && right.length){
    fn(left[0], right[0]) === -1 ? merged.push(left.shift()) : merged.push(right.shift());
  }

  left.length ? merged = merged.concat(left) : merged = merged.concat(right);
  return merged;
}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  const splitArrs = split(arr);

  const left = mergeSort(splitArrs[0]);
  const right = mergeSort(splitArrs[1]);

  return merge(left, right);
}
