function memoizedPascal() {
  const memo = {};
  return function pascal(row, col) {
    const key = `${row},${col}`;
    if (key in memo) return memo[key];
    if (col === 0 || col === row) return 1;
    memo[key] = pascal(row - 1, col - 1) + pascal(row - 1, col);
    return memo[key];
  };
}

const pascalMemo = memoizedPascal();

console.time("With Memoization - Pascal's Triangle");
console.log(pascalMemo(20, 15)); // Expected output: 6435
console.timeEnd("With Memoization - Pascal's Triangle");

console.time("With Memoization - Pascal's Triangle");
console.log(pascalMemo(20, 15)); // Expected output: 6435
console.timeEnd("With Memoization - Pascal's Triangle");

console.time("With Memoization - Pascal's Triangle");
console.log(pascalMemo(20, 15)); // Expected output: 6435
console.timeEnd("With Memoization - Pascal's Triangle");

console.time("With Memoization - Pascal's Triangle");
console.log(pascalMemo(20, 15)); // Expected output: 6435
console.timeEnd("With Memoization - Pascal's Triangle");

console.time("With Memoization - Pascal's Triangle");
console.log(pascalMemo(20, 15)); // Expected output: 6435
console.timeEnd("With Memoization - Pascal's Triangle");
