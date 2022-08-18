// 정렬
function solution(numbers) {
  let answer = numbers
    .map((c) => c + "") // 숫자를 문자열로 변경
    .sort((a, b) => b + a - (a + b)) // Array.sort()는 return하는 값이 양수이면 순서를 그대로 유지하고 음수이면 순서를 바꿔준다.
    .join(""); // array를 문자열로 변경

  return answer[0] === "0" ? "0" : answer; // 전부 0인 경우는 '0' 출력하도록
}
