// 이분탐색

function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 0; // 최소
  let right = n * times[times.length - 1]; // 최대

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(solution(6, [7, 10]));
