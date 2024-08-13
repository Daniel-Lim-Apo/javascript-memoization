function editDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0) return len2;
  if (len2 === 0) return len1;

  if (str1[len1 - 1] === str2[len2 - 1]) {
    return editDistance(str1.slice(0, -1), str2.slice(0, -1));
  }

  return (
    1 +
    Math.min(
      editDistance(str1, str2.slice(0, -1)), // Insert
      editDistance(str1.slice(0, -1), str2), // Remove
      editDistance(str1.slice(0, -1), str2.slice(0, -1)) // Replace
    )
  );
}

console.time("Without Memoization - Edit Distance");
console.log(editDistance("tomorrow is sunday", "today is saturday")); // Expected output: 10 in average 34s
console.timeEnd("Without Memoization - Edit Distance");
