// 완전탐색
// 숫자 조합 구하기 및 소수 구하기

function solution(numbers) {
  let answer = 0;
  let numArr = numbers.split("");
  const set = new Set();

  function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  // 숫자 조합하기 (combination)
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }

    if (str.length > 0 && str.indexOf(0) != 0) {
      if (isPrime(parseInt(str))) {
        set.add(str);
        answer = set.size;
      }
    }
  };

  mergeNumbers(numArr, "");

  return answer;
}

console.log(solution("011"));
console.log(solution("17"));
