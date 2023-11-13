function solution(str) {
  let arr = new Array(5).fill(0);
  let newArr = str.split("");
  for (let el of newArr) {
    if (el === "A") arr[0]++;
    if (el === "B") arr[1]++;
    if (el === "C") arr[2]++;
    if (el === "D") arr[3]++;
    if (el === "E") arr[4]++;
  }
  let election = arr.indexOf(Math.max(...arr));
  switch (election) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    case 4:
      return "E";
  }
}

console.log(solution("BACBACCACCBDEDE"));
