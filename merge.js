function split(arr){
  const middle = Math.floor(arr.length/2);

  return {left: arr.slice(0, middle) , right: arr.slice(middle)};
}

function merge(left, right, fn = (a,b) => a < b ? -1 : 1){
  let merged = [];
  while(left.length && right.length){
    fn(left[0], right[0]) === -1 ? merged.push(left.shift()) : merged.push(right.shift());
  }

  return merged.concat(left).concat(right);
}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  const {left, right} = split(arr);

  return merge(mergeSort(left), mergeSort(right));
}
