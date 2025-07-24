class keyword1 {
  add(x, y) {
    return x + y;
  }

  multiply(x, y) {
    return x * y;
  }

  sub(x, y) {
    return x - y;
  }

    divide(x, y) {
    return x/y;
  }

  OddEven(y){
    if (y % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
}

module.exports = new keyword1();