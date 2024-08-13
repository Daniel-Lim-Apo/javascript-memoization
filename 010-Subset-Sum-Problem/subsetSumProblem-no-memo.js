function subsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n === 0 && sum !== 0) return false;

  if (arr[n - 1] > sum) return subsetSum(arr, n - 1, sum);

  return subsetSum(arr, n - 1, sum) || subsetSum(arr, n - 1, sum - arr[n - 1]);
}

console.time("Without Memoization - Subset Sum");
console.log(subsetSum([3, 34, 4, 12, 5, 2], 6, 9)); // Expected output: true
console.timeEnd("Without Memoization - Subset Sum");
