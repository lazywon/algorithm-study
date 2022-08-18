// 정렬
function solution(array, commands) {
  let answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    let i = commands[idx][0];
    let j = commands[idx][1];
    let k = commands[idx][2];

    let tmp_arr = array.slice(i - 1, j);
    // sort 메서드는 compareFunction을 받는 메서드
    // 숫자가 문자열로 변환되기 때문에 맨 앞 글자를 비교하여 '10'은 '2'보다 작은 값으로 취급하기 때문에
    // 오름차순 순서로 숫자를 비교하려면 sort( )를 비워서 쓰면 안 되고 안에 compareFunction조건을 사용해야 함
    let sorted_arr = tmp_arr.sort((a, b) => a - b);

    answer.push(sorted_arr[k - 1]);
  }

  return answer;
}
