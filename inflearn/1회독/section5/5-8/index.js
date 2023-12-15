const compareMap = (stringMap, standardMap) => {
  if (stringMap.size !== standardMap.size) return false;
  for (let [key, value] of stringMap) {
    if (!standardMap.has(key) || standardMap.get(key) !== value) return false;
  }
  return true;
};

function solution(string, standard) {
  let result = 0;
  let standardHash = new Map();
  let stringHash = new Map();

  for (let el of standard) {
    if (standardHash.has(el)) standardHash.set(el, standardHash.get(el) + 1);
    else standardHash.set(el, 1);
  }

  for (let i = 0; i < standard.length - 1; i++) {
    if (stringHash.has(string[i]))
      stringHash.set(string[i], stringHash.get(string[i]) + 1);
    else stringHash.set(string[i], 1);
  }

  let count = 0;
  for (let i = standard.length - 1; i < string.length; i++) {
    if (stringHash.has(string[i]))
      stringHash.set(string[i], stringHash.get(string[i]) + 1);
    else stringHash.set(string[i], 1);
    if (compareMap(stringHash, standardHash)) result++;
    stringHash.set(string[count], stringHash.get(string[count]) - 1);
    if (stringHash.get(string[count]) === 0) stringHash.delete(string[count]);
    count++;
  }
  return result;
}

console.log(solution("bacaAacba", "abc"));
