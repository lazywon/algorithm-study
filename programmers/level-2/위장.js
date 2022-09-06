// 해시
// 문제 해설 참고
// https://one-it.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Hash-%EC%9C%84%EC%9E%A5

function solution(clothes) {
  let answer = 1;
  let map = new Map();

  clothes.forEach((v, i) => {
    let type = v[1];
    // map 안에 중복된 종류가 있으면 해당 값에 1을 더해주고
    if (map.has(type)) map.set(type, map.get(type) + 1);
    // 그게 아니면 1로 설정
    else map.set(type, 1);
  });

  for (let x of map.values()) {
    // 모든 경우의 수 = 종류 개수별로 곱하기
    // 1을 더해주는 이유는 안입는 경우도 있으므로
    answer *= x + 1;
  }

  // 최소 1개 이상은 입으므로 아예 입지 않는 경우 1을 빼준다
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
