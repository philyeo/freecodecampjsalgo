function diffArray(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x))
      .concat(arr2.filter(x => !arr1.includes(x)));
  // var newArr = [];
  // return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));