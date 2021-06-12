function uniteUnique(arr) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function uniteUnique(arr) {
//   var args = [...arguments];
//   var result = [];
//   for (var i = 0; i < args.length; i++) {
//     for (var j = 0; j < args[i].length; j++) {
//       if (!result.includes(args[i][j])) {
//         result.push(args[i][j]);
//       }
//     }
//   }
//   return result;
// }