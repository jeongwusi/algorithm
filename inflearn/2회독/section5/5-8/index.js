const compare = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (const [key, value] of map2) {
    if (!map1.has(key) || map1.get(key) !== value) return false;
  }
  return true;
};

const solution = (s, t) => {
  let answer = 0;
  const sH = new Map();
  const tH = new Map();

  for (const el of t) {
    if (tH.has(el)) tH.set(el, tH.get(el) + 1);
    else tH.set(el, 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let index = 0;
  for (let i = t.length - 1; i < s.length; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
    if (compare(sH, tH)) answer++;
    sH.set(s[index], sH.get(s[index]) - 1);
    if (sH.get(s[index]) === 0) sH.delete(s[index]);
    index++;
  }

  return answer;
};

console.log(solution("bacaAacba", "abc"));
