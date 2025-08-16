const numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
const filteredNumbers = [];
let count = 0;

for (const num of numbers) {
  if (num % 2 === 0 && num > 20) {
    filteredNumbers.push(num);
    count++;
  }
}

console.log(`Found ${count} numbers: [${filteredNumbers.join(', ')}]`);

console.log('\nDetailed breakdown:');
console.log('Original numbers:', numbers);
console.log('Filter criteria: even AND greater than 20');
console.log('Matching numbers:', filteredNumbers);
console.log('Total matches:', count);

