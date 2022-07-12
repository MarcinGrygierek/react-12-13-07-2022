function foo(a, b, ...params) {
  console.log(a, b, params);
}

foo(1, 2, 3, 4, 5, 6, 7, 8, 9);

// a przyjmie wartość 1, b wartość 2, a reszta parametrów będzie w tablicy params

function bar(a, b = 100) {
  return a + b;
}

bar(1, 2); // 3
bar(1); // 101
