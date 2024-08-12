function memoizedFibonacci() {
    const memo = {};
    return function fib(n) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };
    console.log(memo)    
}

const fibonacciMemo = memoizedFibonacci();

console.time("With Memoization - Fibonacci");
console.log(fibonacciMemo(100));
console.timeEnd("With Memoization - Fibonacci");

console.time("With Memoization - Fibonacci");
console.log(fibonacciMemo(100));
console.timeEnd("With Memoization - Fibonacci");

console.time("With Memoization - Fibonacci");
console.log(fibonacciMemo(40));
console.timeEnd("With Memoization - Fibonacci");

console.time("With Memoization - Fibonacci");
console.log(fibonacciMemo(100));
console.timeEnd("With Memoization - Fibonacci");