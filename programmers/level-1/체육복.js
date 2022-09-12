// Greedy

function solution(n, lost, reserve) {
  let students = Array.from({ length: n }, () => 1);
  let answer = 0;

  lost.map((v) => {
    students[v - 1]--;
  });
  reserve.map((v) => {
    students[v - 1]++;
  });

  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      } else if (students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
    if (students[i] > 0) answer++;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
