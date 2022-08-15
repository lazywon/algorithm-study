function solution(lottos, win_nums) {
  const answer = [];
  const ranking = [6, 6, 5, 4, 3, 2, 1];

  let minCnt = lottos.filter((v) => win_nums.includes(v)).length;
  let maxCnt = lottos.filter((v) => v === 0).length + minCnt;

  answer.push(ranking[maxCnt]);
  answer.push(ranking[minCnt]);

  return answer;
}
