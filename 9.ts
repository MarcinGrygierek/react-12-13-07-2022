interface Address {
    city: string;
    country: string;
}

interface User {
    name: string,
    lastName: string;
    address: Address;
    phone?: string;
    email?: string;
}

// rozszerzanie interfejsów
interface Foo {
    a: string;
    b: string;
}

interface FooExtended extends Foo {
    c: string;
}

const obj: FooExtended = {
    a: '100',
    b: '200',
    c: '123'
}

// typowanie funkcji
const foo = (a: number): number => {
    return a * a;
}

// rzutowanie - unikamy czegoś takiego!
let aaa = 100;

aaa = '1000' as unknown as number // zostanie przypisana wartość o niepoprawnym typie

// enum
enum Constants {
    Pi = 3.14,
    LoremIpsum = 12.20,
    Epsilon = 0.00000000001
}

console.log(Constants.Epsilon);