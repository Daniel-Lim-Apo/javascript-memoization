function memoizedLCS() {
  const memo = {};
  return function lcs(str1, str2) {
    const key = `${str1}-${str2}`;
    if (key in memo) return memo[key];

    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 === 0 || len2 === 0) return 0;

    if (str1[len1 - 1] === str2[len2 - 1]) {
      memo[key] = 1 + lcs(str1.slice(0, -1), str2.slice(0, -1));
    } else {
      memo[key] = Math.max(
        lcs(str1, str2.slice(0, -1)),
        lcs(str1.slice(0, -1), str2)
      );
    }

    return memo[key];
  };
}

const lcsMemo = memoizedLCS();

console.time("With Memoization - LCS");
console.log(lcsMemo("AGGTAB", "GXTXAYB")); // Expected output: 4
console.timeEnd("With Memoization - LCS");
