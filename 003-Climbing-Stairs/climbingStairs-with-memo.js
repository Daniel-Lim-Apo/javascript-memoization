function memoizedClimbStairs() {
  const memo = {};
  return function climb(n) {
    if (n in memo) return memo[n];
    if (n <= 2) return n;
    memo[n] = climb(n - 1) + climb(n - 2);
    return memo[n];
  };
}

const climbStairsMemo = memoizedClimbStairs();

console.time("With Memoization - Climbing Stairs");
console.log(climbStairsMemo(30));
console.timeEnd("With Memoization - Climbing Stairs");
