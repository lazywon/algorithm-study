// 스택
function solution(s) {
  const arr = [...s];
  let tmp_arr = [];

  if (s[0] === ")" || s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      tmp_arr.push("(");
    } else {
      tmp_arr.pop();
    }
  }

  if (tmp_arr.length === 0) {
    return true;
  }

  return false;
}
