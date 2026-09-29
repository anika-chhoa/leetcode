let x = 1;

function mySqt(x) {
  if (x <= 0) {
    return 0;
  }
  for (let i = 0; i <= x; i++) {
    if (i * i === x) {
      return i;
    }
    if ((i + 1) * (i + 1) > x) {
      return i;
    }
  }
}

let result = mySqt(x);
console.log(result);
