function myReplace(str, before, after) {
  let tmpStr = str;
  var oriWords = str.split(" ");
  var tmpWords = tmpStr.toLowerCase().split(" ")


  // console.log(words);
  
  var idx = oriWords.indexOf(before);
  var firstChar = oriWords[idx][0];

  if (firstChar == firstChar.toUpperCase()) {
    console.log("i am here");
    var newAfter = after[0].toUpperCase() + after.slice(1, after.length)
    console.log(newAfter);
    console.log(oriWords);
    oriWords.splice(idx, 1, newAfter);
  } else {
    oriWords.splice(idx, 1, after.toLowerCase());
  }
  console.log(firstChar);
  // console.log(idx);
  // words.splice(words.indexOf(before), 1, after);
  // console.log("the new sentence is, ", words);
  var newSentence = oriWords.join(" ");
  return newSentence;
}

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));
//console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));