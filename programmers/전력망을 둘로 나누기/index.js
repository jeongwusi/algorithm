const solution = (n, wires) => {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const dfs = (node, visited) => {
    let count = 1;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) count += dfs(neighbor, visited);
    }
    return count;
  };

  let minDifference = Infinity;

  for (const [v1, v2] of wires) {
    const visited = Array(n + 1).fill(0);
    visited[v1] = true;

    const count1 = dfs(v2, visited);
    const count2 = n - count1;

    minDifference = Math.min(minDifference, Math.abs(count1 - count2));
  }
  return minDifference;
};

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
