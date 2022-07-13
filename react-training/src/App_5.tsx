const App = () => {
  const users = [
    {
      name: 'Marcin',
      lastName: 'Grygierek',
      id: 1,
    },
    {
      name: 'Jakub',
      lastName: 'Król',
      id: 2,
    },
    {
      name: 'Adam',
      lastName: 'Nowak',
      id: 3,
    },
  ];

  return (
    <ul>
      {users.map((user) => (
        // key jest atrybutem używanym wewnętrznie przez reacta - my nie mamy do niego dostępu do odczytu
        // key musi być unikalny (najlepiej unikalne ID) - pozwala określić "stabilność" elementu pomiędzy zmianami - React będzie w stanie wtedy zweryfikować które elementy zmieniły się pomiędzy zmianami
        <li key={user.id}>
          {user.name} {user.lastName}
        </li>
      ))}
      {/* React dostając tablicę elementów - wyświetla każdy po kolei, wykorzystujemy 
      ten fakt mapując tablicę obiektów na tablicę elementów powyżej */}
      {/* {
        [
            <li>{users[0].name}</li>,
            <li>{users[1].name}</li>,
            <li>{users[2].name}</li>,
        ]
      } */}
    </ul>
  );
};

export { App };
