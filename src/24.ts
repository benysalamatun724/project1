function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0, b = 1, c = 1;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

console.log(fibonacci(10));
