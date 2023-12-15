const solution = (arr) => {
  const newArr = arr.sort((a, b) => a - b);
  if (newArr[0] + newArr[1] > newArr[2]) return "YES";
  else return "NO";
};

console.log(solution([6, 7, 11]));

console.log(solution([13, 33, 17]));
