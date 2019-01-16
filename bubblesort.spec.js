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
