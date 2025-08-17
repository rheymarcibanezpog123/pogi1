const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const transformedWords = [];
for (let i = 0; i < words.length; i++) {
  const reversedWord = reverseString(words[i]);
  transformedWords.push(reversedWord.toUpperCase());
}

console.log('Original array:', words);
console.log('Transformed array:', transformedWords);

console.log('\nTransformation steps:');
for (let i = 0; i < words.length; i++) {
  console.log(`${words[i]} → ${reverseString(words[i])} → ${transformedWords[i]}`);
}
