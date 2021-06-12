function convertHTML(str) {

  var entityListObj = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"' : "&quot;",
    "'" : "&apos;"
  }

  str = str.replace(/&/g, entityListObj["&"]);
  str = str.replace(/</g, entityListObj["<"]);
  str = str.replace(/>/g, entityListObj[">"]);
  str = str.replace(/\"/g, entityListObj["\""]);
  str = str.replace(/\'/g, entityListObj["'"]);

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));