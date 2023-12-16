const solution = (arr) => {
  let newArr = [...new Set(arr)];
  let answer = 1;
  let flag = 0;

  for (let i = 1; i < newArr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (newArr[i] < newArr[j]) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) answer++;
    else flag = 0;
  }
  return answer;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
