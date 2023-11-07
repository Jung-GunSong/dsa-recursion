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
  if (words.length === 0) return 0;


  return Math.max(words[0].length, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */
// "hello" -> "hlo"
// "hola" -> hl
function everyOther(str) {
  if (str.length <= 1) return str;

  return str[0] + everyOther(str.slice(2));

}

/*
  if arr.length === 0, return false
  arr[0] === val, return true, find(arr.slice(1))
*/
/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;
  if (arr[0] === val) {
    return true;
  }
  return find(arr.slice(1), val);
}

/* base case if str.length <= 1, return true
  ""
  "o"
  "coc"
  "acoca"
  "tacocat"

  ""
  "oo"
  "cooc"
  "acooca"
  "tacoocat"
*/

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

/* if str.length === 1 return str
    reversed = str[-1] + revString()
*/

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str;

  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

/**
 * base case: if empty array, return -1
 *
 * progression:
 * if match, return 0
 * else return 1 + findIndex(arr.slice(1))
 *
 * "porcupine"
 * 1+1+1+1-1
 *
 */
function findIndex(arr, val) {

  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;

  if (findIndex(arr.slice(1), val) === -1){
    return 0 + findIndex(arr.slice(1), val);
  }

    return 1 + findIndex(arr.slice(1), val);
}

/** gatherStrings: given an object, return an array of all of the string values. */

/**
 * requires iteration
 * base case is when iteration is over
 *
 * progression: is this a obj or string?
 * if obj, then run recurssive function
 * if string, return string in an array with recursive function
 * spread into new array
 *
 *
 *
 */
function gatherStrings(obj) {

  for (let key in obj){
    if (typeof obj[key] === "object") gatherStrings(obj[key]);

    if(typeof obj[key] === "string"){
      const currentString = obj[key];
      delete obj[key];
      return [currentString, ...gatherStrings(obj)]
    };
  };

};
  /**
   * even if we gather all strings inside a nested obj
   * we are not returning this array after we done looping through
   * that nested obj
   */

  // const values = Object.values(obj);

  // for (let value of values){

  // }


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
