function solution(tickets) {
  tickets.sort((a, b) => a[1].localeCompare(b[1]));

  const dfs = (departure, tickets, path) => {
    if (!tickets.length) return path;

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === departure) {
        const result = dfs(
          tickets[i][1],
          [...tickets.slice(0, i), ...tickets.slice(i + 1)],
          [...path, tickets[i][1]]
        );
        if (result) return result;
      }
    }
  };

  return dfs("ICN", tickets, ["ICN"]);
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
