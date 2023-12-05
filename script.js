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

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  // Add code here
  if (name == owner ){
     return "Hello boss"
  }else {
    return "Hello guest"
  } 
};
//cleaner version

function greet1 (name, owner){
  return name == owner ? "Hello boss" : "Hello guest"
};

const greet2 = (name, owner) => 
  name==owner ? "hello boss" : "hello guest"



//   Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
words = ['hello', 'world', 'this', 'is', 'great']
  function smash (words) {
    return words.join(' ').trim();
 };

 console.log(smash(['hello', 'world', 'this', 'is', 'great']))