describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts a 3 int array', () => {
    expect(bubbleSort([3, 1, 2])).toEqual([1,2,3]);
  });

  it('sorts a long array', () =>{

    expect(bubbleSort([1,3,4,6,5,2, 76, 22, 34, 11, 109] )).toEqual([1,2,3,4,5,6,11,22,34,76,109]);
  });
});

describe('customBubble', () => {
  it('sorts with a custom func', () =>{
    var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    var sorted = arrToSort.sort(function comparator (a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    });

    expect(sorted).toEqual([{age: 2}, {age: 4}, {age: 8}, {age: 9}]);
  });
});
