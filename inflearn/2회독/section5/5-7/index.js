const solution = (str1, str2) => {
  const obj = {};

  for (const el of str1) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  for (const el of str2) {
    if (!obj[el] || obj[el] === 0) return "NO";
    else obj[el]--;
  }

  return "YES";
};

console.log(solution("AbaAeCe", "baeeACA"));

console.log(solution("abaCC", "Caaab"));
