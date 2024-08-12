function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("Without Memoization - Fibonacci");
console.log(fibonacci(35));
console.timeEnd("Without Memoization - Fibonacci");

console.time("Without Memoization - Fibonacci");
console.log(fibonacci(35));
console.timeEnd("Without Memoization - Fibonacci");

console.time("Without Memoization - Fibonacci");
console.log(fibonacci(35));
console.timeEnd("Without Memoization - Fibonacci");