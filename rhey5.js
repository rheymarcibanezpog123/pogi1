const colors = ['red', 'blue', 'green', 'blue', 'yellow', 'red', 'purple'];

console.log('Original colors array:', colors);

console.log('\n--- Array Operations ---');
console.log('First color:', colors[0]);
console.log('Third color:', colors[2]);
console.log('Array length:', colors.length);

console.log("\nFirst index of 'blue':", colors.indexOf('blue'));

console.log("Last index of 'blue':", colors.lastIndexOf('blue'));

const uniqueColors = [...new Set(colors)];
console.log('\nUnique colors:', uniqueColors);

colors.push('orange');
console.log('\nAfter adding orange:', colors);

const removedColor = colors.pop();
console.log('Removed color:', removedColor);
console.log('After removal:', colors);

const bColors = colors.filter(color => color.startsWith('b'));
console.log("\nColors starting with 'b':", bColors);

const upperColors = colors.map(color => color.toUpperCase());
console.log('\nUppercase colors:', upperColors);

console.log("\nIncludes 'green'?", colors.includes('green'));

console.log('\nJoined colors string:', colors.join(', '));

console.log('\nFinal array:', colors);
