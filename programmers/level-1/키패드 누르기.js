function solution(numbers, hand) {
  let answer = "";
  let handStr = hand === "left" ? "L" : "R";
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };
  let current_left = [3, 0]; // *
  let current_right = [3, 2]; // #

  const left_num = [1, 4, 7];
  const right_num = [3, 6, 9];
  const center_num = [2, 5, 8, 0];

  numbers.map((num) => {
    if (left_num.includes(num)) {
      answer += "L";
      current_left = pos[num];
    } else if (right_num.includes(num)) {
      answer += "R";
      current_right = pos[num];
    } else {
      let diff_left =
        Math.abs(pos[num][0] - current_left[0]) +
        Math.abs(pos[num][1] - current_left[1]);
      let diff_right =
        Math.abs(pos[num][0] - current_right[0]) +
        Math.abs(pos[num][1] - current_right[1]);
      if (diff_left == diff_right) {
        //좌표 거리가 같은 경우
        answer += handStr;
        if (handStr === "L") {
          current_left = pos[num];
        } else {
          current_right = pos[num];
        }
        return;
      } else {
        let min = diff_left < diff_right ? "L" : "R";
        answer += min;

        if (min === "L") {
          current_left = pos[num];
        } else {
          current_right = pos[num];
        }
      }
    }
  });

  return answer;
}
