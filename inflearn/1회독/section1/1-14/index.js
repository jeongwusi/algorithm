function solution(arr) {
  let str = "";
  for (let el of arr) {
    if (str.length === 0) str = el;
    if (str.length <= el.length) str = el;
  }
  return str;
}

console.log(solution(["5", "teacher", "time", "student", "beautiful", "good"]));
