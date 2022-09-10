// DFS

function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);
  //   let visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);

console.log(
  solution(5, [
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ])
);
