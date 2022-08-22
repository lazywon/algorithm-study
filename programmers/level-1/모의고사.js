// 완전탐색
function solution(answers) {
    let answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let counts = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (person1[i % 5] === answers[i]) counts[0]++;
        if (person2[i % 8] === answers[i]) counts[1]++;
        if (person3[i % 10] === answers[i]) counts[2]++;
    }
    
    let max = Math.max(...counts);
    
    if (counts[0] === max) answer.push(1);
    if (counts[1] === max) answer.push(2);
    if (counts[2] === max) answer.push(3);
    
    return answer;
}