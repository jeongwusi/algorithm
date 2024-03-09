function solution(begin, target, words) {
  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();
    if (!words.includes(target)) return 0;
    if (currentWord === target) return step;

    for (const word of words) {
      if (!visited.has(word) && check(currentWord, word)) {
        visited.add(word);
        queue.push([word, step + 1]);
      }
    }
  }
  return 0;
}

const check = (word1, word2) => {
  let cnt = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) cnt++;
    if (cnt > 1) return false;
  }
  return true;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

// target이 words 내에 없는 경우
// 방문한 단어를 추적
// [현재 단어, 변환 횟수]
// 큐에서 하나의 원소를 꺼냄
// 목표 단어에 도달한 경우
// 단어를 방문한 것으로 표시
// 큐에 추가
// 변환할 수 없는 경우

// 한 글자만 다른 경우 true 반환
