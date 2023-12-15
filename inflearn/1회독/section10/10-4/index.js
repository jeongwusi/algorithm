const solution = (coinArr, num) => {
  let dy = Array.from({ length: num + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < coinArr.length; i++) {
    for (let j = coinArr[i]; j < dy.length; j++) {
      dy[j] = dy[j - coinArr[i]] + 1;
    }
  }
  return dy[num];
};

console.log(solution([1, 2, 5], 15));
