// funkcja wyższego rzędu - funkcj która przyjmuje funkcję w parametrze
// lub zwraca funkcję
setTimeout(() => {
  console.log('Hello');
}, 1000);

// standardowa iteracja przez tablicę
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

// użycie forEach
arr.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

// użycie map - stworzenie nowej tablicy z kwadratami
const arr2 = arr.map((element) => {
  return element * element;
});

// użycie filter - stworzenie nowej tablicy z elementami parzystymi
const arr3 = arr.filter((element) => {
  return element % 2 === 0;
});

// użycie reduce do zsumowania tablicy
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((acc, curr) => {
  return acc + curr;
});
