/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  /**
   * want to look at each word
   * count each letter in each word
   * keep track of if this length is > than designated "longest" word
   * if its length is greater, its length is now longest length
   *
   * if one word exists in array
   * base case, when words.length === 1
   * return words[0].length
   *
   * compare length of first element and slice rest into another recursive call
   *
   */
  if(words.length === 0) return 0;


  return Math.max(words[0].length, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */
// "hello" -> "hlo"
// "hola" -> hl
function everyOther(str) {
  if (str.length <= 1) return str;

  return str[0] + everyOther(str.slice(2));

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
