function shortestWord(sentence) {
  let words = sentence.split(' ');
  let shortest = words[0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length <= shortest.length) {
      shortest = word;
    }
  }

  return shortest;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
