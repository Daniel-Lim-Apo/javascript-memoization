function memoizedCoinChange() {
  const memo = {};
  return function change(coins, amount) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    let min = Infinity;
    for (let coin of coins) {
      if (amount - coin >= 0) {
        min = Math.min(min, change(coins, amount - coin) + 1);
      }
    }
    memo[amount] = min;
    return min;
  };
}

const coinChangeMemo = memoizedCoinChange();

console.time("With Memoization - Coin Change");
console.log(coinChangeMemo([1, 2, 5], 33)); // Expeted output: 3
console.timeEnd("With Memoization - Coin Change");
