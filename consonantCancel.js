function consonantCancel(sentence) {
  let words = sentence.split(' ');
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newWords.push(firstVowel(word));
  }
  return newWords.join(' ');
};

function firstVowel(word) {
  let vowels = 'aeiou';
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      return word.slice(i);
    }
  }
  return word;
};

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
