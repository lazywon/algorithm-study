// BFS - 최단 거리 구할 땐 BFS

function solution(maps) {
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  let answer = -1; // 상대팀 진영에 도착할 수 없는 경우

  function bfs(x, y, cnt) {
    let queue = [];
    queue.push([x, y, cnt]);
    maps[x][y] = 0;

    while (queue.length > 0) {
      let [x, y, cnt] = queue.shift(); // 첫 번째 요소 꺼내기

      if (x === n && y === m) {
        answer = cnt;
        return;
      }

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx > n || ny > m) continue;

        if (maps[nx][ny] === 1) {
          maps[nx][ny] = 0; // 방문한 곳 0으로 만들기
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
    return;
  }

  bfs(0, 0, 1);
  return answer;
}

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
