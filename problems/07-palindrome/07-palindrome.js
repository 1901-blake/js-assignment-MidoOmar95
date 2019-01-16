/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  
    var re = /[\W_]/g;
    var lowRegStr = someStr.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;

}

// isPalindrome("racecar");
console.log(isPalindrome("racecar"));