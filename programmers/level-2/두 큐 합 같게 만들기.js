// 투 포인트 이용
function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  const sum = (array) => array.reduce((a, b) => a + b);
  const MAXCOUNT = 2 * queue1.length + 2;
  const target = sum(queue) / 2;
  let cnt = 0;
  let start = 0;
  let end = queue1.length;
  let total_sum = sum(queue.slice(start, end));

  while (cnt <= MAXCOUNT) {
    if (target === total_sum) return cnt;

    if (target > total_sum) {
      total_sum += queue[end];
      end++;
    } else if (target < total_sum) {
      total_sum -= queue[start];
      start++;
    }
    cnt++;
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 1], [1, 5]));
