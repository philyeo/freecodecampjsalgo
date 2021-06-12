function pairElement(str) {
  var splittedStr = str.split("");

  var newDNA = splittedStr.map(eachChar => {
              var arr = [];
              arr.push(eachChar);
              if(eachChar == 'G') {
                arr.push('C');
              } else if(eachChar == 'C') {
                arr.push('G'); 
              } else if(eachChar == 'T') {
                arr.push('A');
              } else if(eachChar == 'A') {
                arr.push('T');
              }
              return arr;
  });

  return newDNA;
}

console.log(pairElement("ATCGA"));
 //should return ["G", "C"], ["C", "G"], ["G", "C"]

//  function pairElement(str) {
//   //create object for pair lookup
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   //split string into array of characters
//   var arr = str.split("");
//   //map character to array of character and matching pair
//   return arr.map(x => [x, pairs[x]]);
// }