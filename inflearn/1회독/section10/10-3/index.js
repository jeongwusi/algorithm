const solution = (arr) => {
  let dy = [1];

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) max = dy[j];
    }
    dy.push(max + 1);
  }
  return Math.max(...dy);
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
