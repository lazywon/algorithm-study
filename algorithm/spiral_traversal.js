// 달팽이 알고리즘
// 빈칸의 개수가 total, 달팽이 알고리즘으로 돌면서 total이 0이 되는 좌표 구하기
const solution = (arr) => {
  let total = 0;

  arr.map((v) => v.map((el) => (el === 0 ? total++ : total)));

  let min_row = 0;
  let min_col = 0;
  let max_row = arr.length - 1;
  let max_col = arr.length - 1;
  let x = 0;
  let y = 0;

  while (total > 0) {
    // right
    for (let i = min_row; i < max_col; i++) {
      if (arr[min_row][i] === 0) {
        total--;
        x = min_row;
        y = i;
        if (total === 0) {
          break;
        }
      }
    }

    // down
    for (let i = min_row; i < max_col; i++) {
      if (arr[i][max_col] === 0) {
        total--;
        x = i;
        y = max_col;
        if (total === 0) {
          break;
        }
      }
    }

    // left
    for (let i = max_row; i > min_col; i--) {
      if (arr[max_row][i] === 0) {
        total--;
        x = max_row;
        y = i;
        if (total === 0) {
          break;
        }
      }
    }

    // up
    for (let i = max_row; i > min_col; i--) {
      if (arr[i][min_col] === 0) {
        total--;
        x = i;
        y = min_col;
        if (total === 0) {
          break;
        }
      }
    }

    min_row++;
    max_col--;
    max_row--;
    min_col++;
  }

  return [x, y];
};

console.log(
  solution([
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
  ])
);
