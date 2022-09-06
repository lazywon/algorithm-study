// 해시
function solution(nums) {
  let answer = 0;
  const select_num = nums.length / 2;
  const type_num = new Set(nums).size;

  answer = select_num > type_num ? type_num : select_num;

  return answer;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
