const compare = (obj1, obj2) => {
  if (Object.entries(obj1).length !== Object.entries(obj2).length) return false;
  for (const { key, val } in obj1) {
    if (!obj2.hasOwnProperty(key) || obj2[key] !== val) return false;
  }
  return true;
};

const solution = (str1, str2) => {
  let answer = 1;
  const obj1 = {};
  const obj2 = {};

  for (const el of str2) {
    if (obj2[el]) obj2[el]++;
    else obj2[el] = 1;
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (obj1[str1[i]]) obj1[str1[i]]++;
    else obj1[str1[i]] = 1;
  }

  let lt = 0;
  for (let i = str2.length - 1; i < str1.length; i++) {
    if (obj1[str1[i]]) obj1[str1[i]]++;
    else obj1[str1[i]] = 1;
    if (compare(obj1, obj2)) answer++;
    obj1[str1[lt]]--;
    if (obj1[str1[lt]] === 0) delete obj1[str1[lt]];
    lt++;
  }
  return answer;
};

console.log(solution("bacaAacba", "abc"));
