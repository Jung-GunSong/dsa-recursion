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

  if (findIndex(arr.slice(1), val) === -1) {
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
 * {key: "string"} => ["string"]
 *  loop over keys in obj, if obj[key] is string, return [obj[key]]
 * {key: "string", key: "string"}
 *
 *
 *  base case             exiting looping through the object -> []
 *  progress base case    looping through the object
 *  function calls itself
 */
function gatherStrings(obj) {
  let out = [];

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      out = [...out, ...gatherStrings(obj[key])];
    } else if (typeof obj[key] === "string") {
      out.push(obj[key]);
    }
  }

  return out;

  // function _gatherStrings(obj) {
  //   for(let key in obj) {
  //     if (typeof obj[key] === "object") {
  //       _gatherStrings(obj[key])
  //     } else if (typeof obj[key] === "string") {
  //       out.push(obj[key])
  //     }
  //   }
  // }

  // _gatherStrings(obj);
  // return out;

  // return [];


  // return [...Object.values(obj).map(value => {
  //   if (typeof value === "object") return gatherStrings(value);
  //   if (typeof value === "string") return value;
  //   return;
  // })];
}

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

/**
 * low pointer: index 0
 * middle pointer: at array.length/2, determines if target was found
 * high pointer array.length-1
 *
 *
 * is target value is > or < than high pointer
 * based that either reassign low or high pointer
 * then middle will eventually equal target
 *
 *
 * recurse but with smaller and smaller arrays
 * if/else to return recursive on different halves of the original array
 * if middle pointer = target, return true
 * if array length === 0, return false
 */

function binarySearch(arr, val) {

  if (arr.length === 0) return false;

  const middlePointer = Math.floor(arr.length/2);

  if (arr[middlePointer] === val) return true;

  if(val < arr[middlePointer]){
    return binarySearch(arr.slice(0, middlePointer), val);
  }else {
    return binarySearch(arr.slice(middlePointer+1), val);
  }

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {
  if (arr.length === 0) return -1;

  const middlePointer = Math.floor(arr.length/2);

  if (arr[middlePointer] === val) return middlePointer;

  if(val < arr[middlePointer]){
    return  binarySearchIndex(arr.slice(0, middlePointer), val);
  }

  if(val > arr[middlePointer] && binarySearchIndex(arr.slice(middlePointer+1), val) === -1){
    return binarySearchIndex(arr.slice(middlePointer+1), val);
  }else if (val > arr[middlePointer]){
    return middlePointer + binarySearchIndex(arr.slice(middlePointer+1), val);
  }

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
