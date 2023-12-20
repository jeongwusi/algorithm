function solution(phone_book) {
  let hashSet = new Set();

  for (const number of phone_book) {
    hashSet.add(number);
  }

  for (const number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.substring(0, i);
      if (hashSet.has(prefix)) return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));

console.log(solution(["123", "456", "789"]));

console.log(solution(["12", "123", "1235", "567", "88"]));
