let strs = ["dog","racecar","car"];

function longestMatch(strs) {
  if (strs.length <= 0) {
    return "";
  }
  let firstWord = strs[0];
  for (let i = 0; i < firstWord.length; i++) {
    let letter = firstWord[i];
    for (let str of strs) {
      if (i === str.length || str[i] !== letter) {
        return firstWord.slice(0, i);
      }
    }
  }
  return firstWord;
}

let result = longestMatch(strs);
console.log(result);
