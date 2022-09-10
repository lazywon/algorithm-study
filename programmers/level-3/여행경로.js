// DFS
// 모든 노드를 방문해야 하는경우
// 현재 노드와 연결이 된 노드를 우선순위로 탐색하며 정답을 찾는 과정
// DFS는 스택 혹은 재귀 함수 이용

function solution(tickets) {
  let answer = [];
  let visited = Array.from({ length: tickets.length }, () => false);

  tickets.sort(); // 글자순 정렬

  const dfs = (str, cnt, path) => {
    // 정렬했으므로 처음오는 경우의 수가 답
    if (cnt === tickets.length && answer.length === 0) {
      answer = path;
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        visited[i] = false;
      }
    }
  };

  dfs("ICN", 0, ["ICN"]);

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
