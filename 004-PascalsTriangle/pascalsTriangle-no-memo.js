function pascal(row, col) {
  if (col === 0 || col === row) return 1;
  return pascal(row - 1, col - 1) + pascal(row - 1, col);
}

console.time("Without Memoization - Pascal's Triangle");
console.log(pascal(20, 15)); // Expected output: 6435
console.timeEnd("Without Memoization - Pascal's Triangle");
