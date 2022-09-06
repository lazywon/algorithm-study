// 해시
function solution(participant, completion) {
  let answer = "";
  const p = participant.sort();
  const c = completion.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
