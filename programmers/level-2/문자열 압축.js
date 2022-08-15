function solution(s) {
  let min_length = s.length;

  if (s.length === 1) return 1;

  // 최대 split 가능한 수는 1 ~ (s.length / 2)
  for (let i = 1; i <= s.length / 2; i++) {
    let arr = [];
    let cnt = 1;
    let result_str = "";

    for (let j = 0; j < s.length; j += i) {
      let tmp_str = s.substr(j, i);
      arr.push(tmp_str);
    }

    for (let k = 0; k < arr.length; k++) {
      // 마지막 문자열인 경우
      if (k === arr.length - 1) {
        result_str += cnt > 1 ? cnt + arr[k] : arr[k];
        break;
      }

      if (arr[k] === arr[k + 1]) {
        cnt++;
      } else {
        if (cnt === 1) {
          //cnt가 1이면 생략
          result_str += arr[k];
        } else {
          result_str += cnt + arr[k];
        }
        cnt = 1;
      }
    }
    min_length = Math.min(min_length, result_str.length);
  }

  return min_length;
}
