// funkcja nazwana
function foo(a, b) {
  return a + b;
}

// wyrażenie funkcyjne
const foo = function (a, b) {
  return a + b;
};

// funkcja strzałkowa - v1
const foo = (a, b) => {
  return a + b;
};

// funkcja strzałkowa - v2
const foo = (a, b) => a + b;

// v3
const foo = (a, b) => {
  if (a + b > 10) return a + b;
  else return a - b;
};

// v4
const foo = (a, b) => {
  return a + b > 10 ? a + b : a - b;
};

// v5 - maksymalnie skompresowany aczkolwiek subiektywnie najmniej czytelny
const foo = (a, b) => (a + b > 10 ? a + b : a - b);
