const solution = (S, E) => {
  let distanceArr = Array.from({ length: E + 1 }, () => 0);
  let checkArr = Array.from({ length: E + 1 }, () => 0);
  let queue = [];
  queue.push(S);
  checkArr[S] = 1;

  while (queue.length) {
    let v = queue.shift();
    for (let nv of [v + 1, v - 1, v + 5]) {
      if (nv > E || checkArr[nv] === 1) continue;
      if (nv === E) return distanceArr[v] + 1;
      else {
        queue.push(nv);
        checkArr[nv] = 1;
        distanceArr[nv] = distanceArr[v] + 1;
      }
    }
  }
};

console.log(solution(5, 14));
