function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    reversed.push(word);
  }
  return reversed.join(' ')
};


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
