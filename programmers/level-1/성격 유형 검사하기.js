function solution(survey, choices) {
    let answer = '';
    let type = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    let cnt = new Array(8).fill(0);
    let score = [3, 2, 1, 0, 1, 2, 3];
    
    for (let i = 0; i < survey.length; i++) {
        let disagree = survey[i].charAt(0);
        let agree = survey[i].charAt(1);
        
        if (choices[i] === 4) {
            continue;
        }
        else if (choices[i] < 4) {
            cnt[type.indexOf(disagree)] += score[choices[i] - 1];
        }
        else {
            cnt[type.indexOf(agree)] += score[choices[i] - 1];
        }
    }
    
    for (let i = 0; i < cnt.length; i=i+2) {
        if (cnt[i] >= cnt[i + 1]) {
            answer += type[i];
        } else {
            answer += type[i + 1];
        }
    }
    
    return answer;
}