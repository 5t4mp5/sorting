function bubbleSort(arr){
  let swapped = false;

  do {
    //let current = arr[0];
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        const t= arr[i]
        arr[i] =  arr[i+1];
        arr[i + 1] = t;
        swapped = true;
      }
    }
  }while(swapped === true);
  return arr;

}
