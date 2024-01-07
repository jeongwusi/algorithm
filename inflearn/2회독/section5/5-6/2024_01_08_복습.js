const solution = (str) => {
  const obj = {};

  for (const el of str) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  const newObj = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => b - a)
  );

  return Object.keys(newObj)[0];
};

console.log(solution("BACBACCACCBDEDE"));
