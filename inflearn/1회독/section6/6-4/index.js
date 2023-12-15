function solution(str) {
  let arr = [];
  for (let el of str) {
    if (el == Number(el)) arr.push(Number(el));
    else {
      if (el == "+") {
        let sum = arr[arr.length - 2] + arr[arr.length - 1];
        arr.pop();
        arr.pop();
        arr.push(sum);
      }
      if (el == "-") {
        let sum = arr[arr.length - 2] - arr[arr.length - 1];
        arr.pop();
        arr.pop();
        arr.push(sum);
      }
      if (el == "*") {
        let sum = arr[arr.length - 2] * arr[arr.length - 1];
        arr.pop();
        arr.pop();
        arr.push(sum);
      }
      if (el == "/") {
        let sum = arr[arr.length - 2] + arr[arr.length - 1];
        arr.pop();
        arr.pop();
        arr.push(sum);
      }
    }
  }
  return arr.join("");
}

console.log(solution("352+*9-"));
