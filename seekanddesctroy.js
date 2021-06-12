function destroyer(arr) {

  // var tmpArgs = arguments;
  // var comparedArgs = tmpArgs.shift();
  // console.log(arguments);
  // console.log(arguments[1]);
  var newArr = arr;
  for(var i = 1; i <= arguments.length; i++) {
    var newArr = without(newArr, arguments[i]);
  }
  return newArr;
}

function without(array, what){
  return array.filter(function(element){ 
      return element !== what;
  });
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));