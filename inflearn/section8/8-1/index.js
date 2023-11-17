function solution(num1) {
  function D(num1) {
    if (num1 === 0) return;
    else {
      D(num1 - 1);
      console.log(num1);
    }
  }

  D(num1);
}

solution(3);
