function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6

  return answer.padEnd(3, answer[answer.length - 1]); // 7
}
