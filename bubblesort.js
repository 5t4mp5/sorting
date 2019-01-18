function bubbleSort(arr, fn = (a, b) => (a < b ? -1 : 1)) {
  if (!Array.isArray(arr)) {
    return "this is not an array";
  }

  let arrCopy = arr.slice();

  let sorted = true;

  for (let i = 0; i < arrCopy.length - 1; i++) {
    const current = arrCopy[i];
    const next = arrCopy[i + 1];

    if (fn(current, next) === 1) {
      sorted = false;
      arrCopy[i] = next;
      arrCopy[i + 1] = current;
    }
  }

  if (!sorted) {
    return bubbleSort(arrCopy.slice(0, -1), fn).concat(arrCopy.slice(-1));
  }

  return arrCopy;
}

function customBubble(arr, fn){
  let swapped = false;
  do {
    //let current = arr[0];
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(fn(arr[i], arr[i +1]) === 1){
        const t= arr[i]
        arr[i] =  arr[i+1];
        arr[i + 1] = t;
        swapped = true;
      }
    }
  }while(swapped === true);
  return arr;
}
