const age = 23; 

const isStudent = age < 25;

console.log(`Age: ${age}`);
console.log(`Is student? ${isStudent}`);

console.log(
  `Explanation: Since ${age} is ${age < 25 ? "less" : "greater than or equal"} to 25, ` +
  `isStudent is set to ${isStudent}`
);
