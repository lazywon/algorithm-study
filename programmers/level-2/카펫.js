// 완전탐색
function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;
      if ((height - 2) * (width - 2) === yellow) {
        return [width, height];
      }
    }
  }

  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
