function removeChar(str) {
  //You got this!
 let newStr = str.substring(1, str.length-1);
  return newStr;
}
removeChar('');
console.log("removeChar", removeChar("words"));

function removeChar2(str) {
    return str.slice(1, -1);
}
console.log('removeChar2', removeChar2("testing"))