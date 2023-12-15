const solution = (num, arr) => {
  let tmp = Array.from({ length: num }, () => 0);
  let check = Array.from({ length: arr.length }, () => 0);
  let result = [];
  const DFS = (L) => {
    if (L === num) {
      result.push(tmp.slice());
      console.log(tmp.join(" "));
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 1) continue;
        check[i] = 1;
        tmp[L] = arr[i];
        DFS(L + 1);
        check[i] = 0;
      }
    }
  };

  DFS(0);
  return result.length;
};

console.log(solution(2, [3, 6, 9]));
