function memoizedEditDistance() {
  const memo = {};
  return function distance(str1, str2) {
    const key = `${str1}-${str2}`;
    if (key in memo) return memo[key];

    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 === 0) return len2;
    if (len2 === 0) return len1;

    if (str1[len1 - 1] === str2[len2 - 1]) {
      return distance(str1.slice(0, -1), str2.slice(0, -1));
    }

    memo[key] =
      1 +
      Math.min(
        distance(str1, str2.slice(0, -1)), // Insert
        distance(str1.slice(0, -1), str2), // Remove
        distance(str1.slice(0, -1), str2.slice(0, -1)) // Replace
      );

    return memo[key];
  };
}

const editDistanceMemo = memoizedEditDistance();

console.time("With Memoization - Edit Distance");
console.log(editDistanceMemo("tomorrow is sunday", "today is saturday")); // Expected output: 9
console.timeEnd("With Memoization - Edit Distance");

console.time("With Memoization - Edit Distance");
console.log(editDistanceMemo("tomorrow is sunday", "today is saturday")); // Expected output: 9
console.timeEnd("With Memoization - Edit Distance");
