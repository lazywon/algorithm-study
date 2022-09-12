// 완전탐색
// dfs로 모든 경우를 다 살펴보고, 그 중 부합하는 최대 수를 구하는 것

function solution(k, dungeons) {
  let answer = 0;
  let visited = Array.from({ length: dungeons.length }, () => false);

  const dfs = (cur, cnt) => {
    answer = Math.max(cnt, answer);

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= cur && !visited[i]) {
        visited[i] = true;
        dfs(cur - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
