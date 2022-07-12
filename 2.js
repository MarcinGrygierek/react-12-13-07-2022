const user = {
  name: 'Marcin',
  address: {
    street: 'Daszyńskiego',
    city: 'Gliwice',
  },
};

const user2 = { ...user };

// user2 === user; // false bo nowa referencja

// user.address === user2.address; // true ponieważ zagnieżdżony address nie został skopiowany głęboko - tylko jego referencja

const user3 = {
  ...user,
  address: {
    ...user.address,
  },
};

// user3.address === user.address; // false ponieważ skopiowaliśmy głęboko cały obiekt
