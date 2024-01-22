// this problem has an error in the instructions
// instead of snakeToCamel this should be snakeToPascal
// PascalCase retains capitalization on first word
// camelCase uncapitalizes the first letter of the first word

function snakeToCamel(str) {
  let words = str.split('_');
  let pascal = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    pascal.push(newWord);
  }

  return pascal.join('');
};


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
