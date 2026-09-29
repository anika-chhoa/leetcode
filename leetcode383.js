var canConstruct = function (ransomNote, magazine) {
  let count = {};

  for (let char of magazine) {
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  for (let char of ransomNote) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
};

const result=canConstruct("aa","aab")
console.log(result)
