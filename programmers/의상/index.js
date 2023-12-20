function solution(clothes) {
  const clothesHash = {};

  for (const [cloth, category] of clothes) {
    if (clothesHash[category]) clothesHash[category]++;
    else clothesHash[category] = 1;
  }

  let result = 1;
  for (const cnt of Object.values(clothesHash)) {
    result *= cnt + 1;
  }

  return result - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
