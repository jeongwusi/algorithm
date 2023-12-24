const solution = (maps) => {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(0)
  );
  const queue = [[0, 0]];

  visited[0][0] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx < 0 ||
        nx >= maps.length ||
        ny < 0 ||
        ny >= maps[0].length ||
        maps[nx][ny] === 0 ||
        visited[nx][ny]
      )
        continue;

      queue.push([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return visited[maps.length - 1][maps[0].length - 1] || -1;
};

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
