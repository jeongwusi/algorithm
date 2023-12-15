const solution = (arr) => {
  const newArr = arr.filter((el) => el % 2 !== 0);
  return `${Math.min(...newArr)}\n${newArr.reduce((a, c) => a + c)}`;
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
