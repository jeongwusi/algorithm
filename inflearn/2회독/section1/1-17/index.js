const solution = (arr) => {
  for (const el of new Set(arr)) {
    console.log(el);
  }
};

solution(["good", "time", "good", "time", "student"]);
