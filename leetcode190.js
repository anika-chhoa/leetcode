let n = 43261596;
function reverseBit(n) {
  let binary = n.toString(2).padStart(32, "0").split("").reverse().join("");
  let decimal = parseInt(binary, 2);
  return decimal;
}
let result = reverseBit(n);
console.log(result);
