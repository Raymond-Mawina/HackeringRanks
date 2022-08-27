function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const arrs = [];
  for (let i = 0; i < n; i++) {
    for (let f = i + 1; f < n; f++) {
      if ((ar[i] + ar[f]) % k === 0) {
        arrs.push([ar[i], ar[f]]);
      }
    }
  }
  return arrs;
}

divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);
