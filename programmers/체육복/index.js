const solution = (n, lost, reserve) => {
  const deduplicateLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  const deduplicateReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);

  let answer = n - deduplicateLost.length;

  deduplicateLost.forEach((deduplicateLostEl) => {
    const index = deduplicateReserve.findIndex(
      (deduplicateReserveEl) =>
        Math.abs(deduplicateLostEl - deduplicateReserveEl) === 1
    );
    if (index !== -1) {
      answer++;
      deduplicateReserve.splice(index, 1);
    }
  });
  return answer;
};

console.log(solution(5, [2, 4], [1, 3, 5]));
