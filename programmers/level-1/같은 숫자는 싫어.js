// 스택
// 여기서 마지막 요소는 i + 1 다음 참조할 요소가 없기 때문에,
// undefined가 뜨는데, 이 값이랑 비교하게 된다.

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
}

// 다른 사람 풀이
function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
