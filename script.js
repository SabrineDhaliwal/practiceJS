function removeChar(str) {
  //You got this!
 let newStr = str.substring(1, str.length-1);
  return newStr;
}
removeChar('');
// console.log("removeChar", removeChar("words"));

function removeChar2(str) {
    return str.slice(1, -1);
}
// console.log('removeChar2', removeChar2("testing"))

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

//  console.log(smash(['hello', 'world', 'this', 'is', 'great']));

//  We need a function that can transform a number (integer) into a string.
function numToString(num){
  return num.toString()
}
// console.log(numToString(2))
// console.log(typeof numToString(4))

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// // 

function DNAtoRNA(dna){
const RNA = dna.replaceAll("T", "U");
return RNA
}

// console.log(DNAtoRNA("GGCATTA"));


//cleaner version
function DNAtoRNA2(dna){
  return dna.replaceAll(/T/g, "U")
}
// console.log(DNAtoRNA2("GTTACGCCTT"))

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = function (num){
  let result =0;
for (let i = 0; i<=num; i++){
  result += i}
return result
};
// console.log(summation(8))

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  

function doubleChar(randomString){
return randomString.split('').map((letter)=>{
  return letter + letter;
}).join('')
}
// console.log(doubleChar("hello World"))

// more concise 
const dblChar = (str)=> str.split('').map(letter => letter + letter).join('');

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// pseudocode
// km/hr -> 1000m/60min 
// 1m -> 100cm 1min-> 60 seconds
//

function cockroachSpeed(speed){
  
}
