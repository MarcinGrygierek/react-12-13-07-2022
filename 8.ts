let a: number = 10;
a = 10000;

let b = 10; //następuje automatyczne określenie typu
// b = false; // wystąpi błąd ponieważ określony typ to number

const arr: number[] = [1233, 1, 3, 4, 5, 6, 7];

interface User {
    name: string,
    lastName: string;
    address: {
        city: string,
        country: string
    },
    phone?: string;
    email?: string;
}

const user1: User = {
    name: 'Marcin',
    lastName: 'Grygierek',
    address: {
        city: 'Gliwice',
        country: 'Poland'
    }
}

const user2: User = {
    name: 'A',
    lastName: 'B',
    address: {
        city: 'C',
        country: 'D'
    },
    phone: '123 123 123',
    email: 'email@example.com'
}