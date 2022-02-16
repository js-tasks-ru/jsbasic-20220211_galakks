function factorial(n) {
  let N = 1;
  for (let i = n; i >= 1; i--) {
    N *= i;
  }
  return N;
}
