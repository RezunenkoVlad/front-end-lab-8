function reverseNumber(n) {
    var returnPositiveNumber = Math.sign(n);
    var returnArrNumber = Math.abs(n).toString().split("").reverse().join("");
    var result = returnPositiveNumber * returnArrNumber;
    return result;
  }
  