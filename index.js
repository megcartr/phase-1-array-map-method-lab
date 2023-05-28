const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const breakDowWordsAndSpaces = tutorials.map((space => space.split(" ")));
  console.log(breakDowWordsAndSpaces);
  for (let string of breakDowWordsAndSpaces){
    for (let item=0;item<string.length;item++){
      string[item] = (string[item].charAt(0).toUpperCase() + string[item].slice(1));
    }
  }
  console.log(breakDowWordsAndSpaces);
  const combinedWordsAndSpaces = breakDowWordsAndSpaces.map((space) => space.join(" "));
  console.log (combinedWordsAndSpaces);
  return combinedWordsAndSpaces;
}
