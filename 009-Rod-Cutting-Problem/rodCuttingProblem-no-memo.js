function rodCutting(prices, n) {
  if (n === 0) return 0;
  let maxValue = -Infinity;

  for (let i = 1; i <= n; i++) {
    maxValue = Math.max(maxValue, prices[i - 1] + rodCutting(prices, n - i));
  }

  return maxValue;
}

console.time("Without Memoization - Rod Cutting");
console.log(rodCutting([1, 5, 8, 9, 10, 17, 17, 20], 8)); // Expected output: 22
console.timeEnd("Without Memoization - Rod Cutting");
