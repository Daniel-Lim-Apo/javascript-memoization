function memoizedSubsetSum() {
  const memo = {};
  return function sum(arr, n, target) {
    const key = `${n}-${target}`;
    if (key in memo) return memo[key];

    if (target === 0) return true;
    if (n === 0 && target !== 0) return false;

    if (arr[n - 1] > target) {
      memo[key] = sum(arr, n - 1, target);
    } else {
      memo[key] =
        sum(arr, n - 1, target) || sum(arr, n - 1, target - arr[n - 1]);
    }

    return memo[key];
  };
}

const subsetSumMemo = memoizedSubsetSum();

console.time("With Memoization - Subset Sum");
console.log(subsetSumMemo([3, 34, 4, 12, 5, 2], 6, 9)); // Expected output: true
console.timeEnd("With Memoization - Subset Sum");
