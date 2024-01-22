function abbreviateWords(sentence) {
  let words = sentence.split(' ');
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      newWords.push(removeVowels(word));
    } else {
      newWords.push(word);
    }
  }
  return newWords.join(' ');
};

function removeVowels(word) {
  let abbreviated = '';
  let vowels = 'aeiou';
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!vowels.includes(letter)) {
      abbreviated += letter;
    }
  }
  return abbreviated;
};

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
