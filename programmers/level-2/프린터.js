// 스택/큐

function solution(priorities, location) {
  let answer = [];
  let waitList = priorities.map((x, i) => [x, i]);

  while (waitList.length) {
    const first = waitList.shift();
    if (first[0] >= Math.max(...waitList.map((x) => x[0]))) {
      answer.push(first[1]); //index
      if (first[1] === location) break;
    } else {
      waitList.push(first);
    }
  }

  return answer.indexOf(location) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
