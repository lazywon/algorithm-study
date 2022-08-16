// DFS 이용

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(cnt, sum) {
    if (cnt === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(cnt + 1, sum + numbers[cnt]);
    dfs(cnt + 1, sum - numbers[cnt]);
  }

  dfs(0, 0);

  return answer;
}
