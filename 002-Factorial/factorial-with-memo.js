function memoizedFactorial() {
  const memo = {};
  return function fact(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return 1;
    memo[n] = n * fact(n - 1);
    return memo[n];
  };
}

const factorialMemo = memoizedFactorial();

console.time("With Memoization - Factorial");
console.log(factorialMemo(20));
console.timeEnd("With Memoization - Factorial");
