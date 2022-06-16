function reverseString(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word)
  if (word === reversedWord) {
     return true
  } else {
    return false 
  }

}

/* 
  Add your pseudocode here
  if the when the string is reversed is the same as input 
  return true
  else 
  return false  
*/

/*
  Add written explanation of your solution here
  the code takes a string a reverses it. if the reversed string is the same as
  the string input then it returns true
  otherwise it returns false 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
}

module.exports = isPalindrome;
