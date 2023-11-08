function solution(num, arr) {
  let str = "";
  let newArr = [...new Set(arr)];
  for (let el of newArr) {
    str += el + "\n";
  }
  return str;
}

console.log(solution(5, ["good", "time", "good", "time", "student"]));
