function uniquePaths(m, n) {
  if (m === 1 || n === 1) return 1;
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}

console.time("Without Memoization - Unique Paths");
console.log(uniquePaths(10, 20)); // Expected output: 48620
console.timeEnd("Without Memoization - Unique Paths");
