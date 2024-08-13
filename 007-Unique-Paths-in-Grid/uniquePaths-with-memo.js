function memoizedUniquePaths() {
  const memo = {};
  return function paths(m, n) {
    const key = `${m},${n}`;
    if (key in memo) return memo[key];
    if (m === 1 || n === 1) return 1;
    memo[key] = paths(m - 1, n) + paths(m, n - 1);
    return memo[key];
  };
}

const uniquePathsMemo = memoizedUniquePaths();

console.time("With Memoization - Unique Paths");
console.log(uniquePathsMemo(10, 20)); // Expected output: 48620
console.timeEnd("With Memoization - Unique Paths");
