describe('Bubble Sort', function(){
  it('is a function', () =>{
    expect(typeof bubbleSort).toEqual('function');
  });

  it('returns an array', () =>{
    expect(Array.isArray(bubbleSort([1, 2]))).toEqual(true);
  });

  it('returns an empty array if given an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('only takes an array', () => {
    expect(bubbleSort(1)).toEqual('this is not an array');
    expect(bubbleSort('hello')).toEqual('this is not an array');
    expect(bubbleSort({a: 1, b:2})).toEqual('this is not an array');
    expect(bubbleSort()).toEqual('this is not an array');
  });

  it('sorts the array in ascending order', () =>{
    expect(bubbleSort([3, 1, 5, 2, 4])).toEqual([1,2,3,4,5]);
  });

  it('does not mutate the original array', () =>{
    let testArr = [3, 1, 2];
    expect(bubbleSort(testArr)).toEqual([1,2,3]);
    expect(testArr).toEqual([3, 1, 2]);
  });

  it('is called recursively', () =>{
    spyOn(window, 'bubbleSort').and.callThrough();
    bubbleSort([7, 1, 2, 5, 3])
    expect(bubbleSort.calls.count()).toBeGreaterThan(1);
    console.log(bubbleSort.calls.count());
  });

  it('can take a comparator function', () => {
    const comp = function (a, b){
      return a.val > b.val ? 1 : -1;
    };

    const objList = [{val: 2}, {val: 1}, {val: 4}, {val: 3}, {val: 10}, {val: 8}];

    expect(bubbleSort(objList, comp)).toEqual([{val: 1}, {val: 2}, {val: 3}, {val: 4}, {val:8}, {val: 10}]);
  });
});
