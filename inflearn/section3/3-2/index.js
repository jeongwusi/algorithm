function solution(str) {
  let onlyAlphabetStr = str.toLowerCase().replace(/[^a-z]/g, "");

  if (onlyAlphabetStr === onlyAlphabetStr.split("").reverse().join(""))
    return "YES";
  else return "NO";
}

let str1 = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str1));

let str2 = "found72";
console.log(solution(str2));
