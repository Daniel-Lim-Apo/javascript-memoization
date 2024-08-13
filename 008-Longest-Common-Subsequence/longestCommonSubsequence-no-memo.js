function lcs(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0 || len2 === 0) return 0;

  if (str1[len1 - 1] === str2[len2 - 1]) {
    return 1 + lcs(str1.slice(0, -1), str2.slice(0, -1));
  } else {
    return Math.max(lcs(str1, str2.slice(0, -1)), lcs(str1.slice(0, -1), str2));
  }
}

console.time("Without Memoization - LCS");
console.log(lcs("AGGTAB", "GXTXAYB")); // Expected output: 4
console.timeEnd("Without Memoization - LCS");
