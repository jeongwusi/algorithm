function solution(k, dungeons) {
  let maxCount = 0;

  const dfs = (fatigueRate, count, dungeons) => {
    maxCount = Math.max(maxCount, count);
    for (let i = 0; i < dungeons.length; i++) {
      const [minRequired, fatigueCost] = dungeons[i];
      if (fatigueRate >= minRequired)
        dfs(
          fatigueRate - fatigueCost,
          count + 1,
          dungeons.slice(0, i).concat(dungeons.slice(i + 1))
        );
    }
  };

  dfs(k, 0, dungeons);

  return maxCount;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
