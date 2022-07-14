// hoisting następuje

// nie dostaniemy błędu ale informację że zmienna a ma wartość undefined
// ponieważ hoisting dotyczy tylko deklaracji, nie wartości
console.log(a);

var a = 10;

// wywołanie funkcji jest możliwe z powodu hoistingu
foo();

function foo() {
  console.log('Foo test');
}

// hoisting nie występuje
// console.log(aa); // - nie zadziała bo nie zdefiniowane
let aa = 10;

for (let i = 0; i < 10; i++) {}
console.log(i); // wystąpi błąd, ponieważ let/const posiada zakres blokowy {}

//
const arr = [];
arr.push(10); // pomimo że arr to const to możemy pushować do tablicy - ponieważ nie zmieniamy referencji

arr = []; // wystąpi błąd bo nowa tablica to nowa referencja
