function coinChange(coins, amount) {
  if (amount === 0) return 0;
  let min = Infinity;
  for (let coin of coins) {
    if (amount - coin >= 0) {
      min = Math.min(min, coinChange(coins, amount - coin) + 1);
    }
  }
  return min;
}

console.time("Without Memoization - Coin Change");
console.log(coinChange([1, 2, 5], 33)); // Expected output: 3
console.timeEnd("Without Memoization - Coin Change");
