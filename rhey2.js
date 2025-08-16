const PI = 3.1416;

console.log("Original PI value:", PI);

try {
  PI = 3.14;
  console.log("This won't be executed");
} catch (error) {
  console.error("Error caught:", error.message);
}

console.log("PI remains:", PI);
