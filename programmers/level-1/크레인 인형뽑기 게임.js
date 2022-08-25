function solution(board, moves) {
  let cnt = 0;
  let stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] === 0) {
        continue;
      } else {
        if (stack[stack.length - 1] === board[i][move - 1]) {
          stack.pop(board[i][move - 1]);
          cnt += 2;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }

  return cnt;
}
