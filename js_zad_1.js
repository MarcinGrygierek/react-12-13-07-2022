// function getSum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// v1
const getSum = (arr) => {
  let sum = 0;

  arr.forEach((el) => {
    sum += el;
  });

  return sum;
};

// v2
const getSumV2 = (arr) => {
  // funkcja użyta wewnątrz reduce daje nam dwa parametry
  // acc - akumulator, który "akumuluje" wartość
  // curr - aktualny element w tablicy
  // drugim parametrem reduce może być początkowa wartość akumulatora
  // domyślnie akumulator jest ustawiany na wartośc pierwszego elementu tablicy
  // a curr na drugi element
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });

  return sum;
};

// v3
const getSumV3 = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
};

// v4
const getSumV4 = (arr) => arr.reduce((acc, curr) => acc + curr);

console.log(getSum([1, 2, 3, 4, 5]));
console.log(getSum([5, 10, 15, 20]));
console.log(getSum([2, 10, 9, 11]));
