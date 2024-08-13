function memoizedRodCutting() {
  const memo = {};
  return function cutting(prices, n) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    let maxValue = -Infinity;

    for (let i = 1; i <= n; i++) {
      maxValue = Math.max(maxValue, prices[i - 1] + cutting(prices, n - i));
    }

    memo[n] = maxValue;
    return maxValue;
  };
}

const rodCuttingMemo = memoizedRodCutting();

console.time("With Memoization - Rod Cutting");
console.log(rodCuttingMemo([1, 5, 8, 9, 10, 17, 17, 20], 8)); // Expected output: 22
console.timeEnd("With Memoization - Rod Cutting");
