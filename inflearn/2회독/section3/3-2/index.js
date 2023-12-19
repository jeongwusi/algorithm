const solution = (str) => {
  const alphabetOnly = str.replace(/[^a-zA-Z]/g, "").toUpperCase();
  const alphabetOnlyReverse = [...str.replace(/[^a-zA-Z]/g, "")]
    .reverse()
    .join("")
    .toUpperCase();

  return alphabetOnly === alphabetOnlyReverse ? "YES" : "NO";
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
