const getSum = (...arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
};

console.log(getSum(1, 2, 3, 4, 5));
console.log(getSum(5, 10, 15, 20));
console.log(getSum(2, 10, 9, 1, 12, 23, 12, 3, 234));
