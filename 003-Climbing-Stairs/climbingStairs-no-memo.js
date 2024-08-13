function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.time("Without Memoization - Climbing Stairs");
console.log(climbStairs(30));
console.timeEnd("Without Memoization - Climbing Stairs");
