function solution(progresses, speeds) {
  let answer = [];

  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let day = days[0];
  let cnt = 1;

  for (let i = 1; i < days.length; i++) {
    if (day >= days[i]) {
      cnt++;
    } else {
      answer.push(cnt);
      day = days[i];
      cnt = 1;
    }

    // 마지막 배포일인 경우도 cnt 포함시키기
    if (i === days.length - 1) answer.push(cnt);
  }

  return answer;
}
