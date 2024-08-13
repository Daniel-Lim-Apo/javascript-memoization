function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.time("Without Memoization - Factorial");
console.log(factorial(20));
console.timeEnd("Without Memoization - Factorial");
