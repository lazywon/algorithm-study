// 해시

function solution(genres, plays) {
  //     let genreCount = Object.fromEntries(genres.map(v => [v, 0]));
  //     for(let i = 0; i < genres.length; i++) {
  //         genreCount[genres[i]] += plays[i];
  //     }
  let genreCount = {};
  genres.forEach((v, i) => {
    genreCount[v] = genreCount[v] ? genreCount[v] + plays[i] : plays[i];
  });

  let album = genres
    .map((name, i) => ({ genre: name, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return genreCount[b.genre] - genreCount[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    });

  let dupDic = {};

  let result = album
    .filter((v) => {
      if (dupDic[v.genre] >= 2) return false;

      dupDic[v.genre] = dupDic[v.genre] ? dupDic[v.genre] + 1 : 1;
      return true;
    })
    .map((v) => v.index);

  return result;
}
