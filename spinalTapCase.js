function spinalCase(str) {

  // str = str.replace(/ /g,"-");
  // str = str.replace(/_/g,"-");
  // str = str.toLowerCase();
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

  // return str;
}

console.log(spinalCase('This Is Spinal Tap'));