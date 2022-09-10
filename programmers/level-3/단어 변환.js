// BFS - 최소 횟수 구하기
// queue 사용
// 1. queue에서 뺀 노드 방문처리하기
// 2. 조건에 맞으면 queue에 push하기
// 3. 정답일 때 return

function solution(begin, target, words) {
  let answer = 0;
  let queue = [];
  let visited = [];

  if (!words.includes(target)) return answer;

  queue.push([begin, answer]); // begin과 변경횟수 넣어주기

  while (queue) {
    let [v, cnt] = queue.shift(); // 첫 번째 요소 꺼내기

    if (v === target) return cnt; // 단어가 일치하면 횟수와 함께 return

    for (let word of words) {
      let diff = 0;
      if (visited.includes(word)) continue;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) diff++;
      }

      if (diff === 1) {
        queue.push([word, cnt + 1]);
        visited.push(word);
      }
    }
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
