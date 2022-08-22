// 완전탐색
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    let max_w = 0;
    let max_h = 0;
    
    rotated.forEach(([w, h]) => {
        if (max_w < w) max_w = w;
        if (max_h < h) max_h = h;
    })
    
    return max_w * max_h;
}