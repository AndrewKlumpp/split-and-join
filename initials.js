function initials(name) {
  let splits = name.split(" ");
  let firstLetters = [];

  for (let i = 0; i < splits.length; i++) {
    let split = splits[i];
    firstLetters.push(split[0].toUpperCase());
  }
  return firstLetters.join('');
};


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
