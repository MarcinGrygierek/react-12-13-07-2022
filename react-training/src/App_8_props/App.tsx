import { Hello, Sum } from './Hello';

const App = () => {
  const name = window.prompt('Podaj imię');

  if (!name) {
    return <p>Musisz podać swoje imię!</p>;
  }

  return (
    <main>
      <header>Super aplikacja</header>
      <Hello name={name} />
      <Sum a={10} b={30} />
    </main>
  );
};

export { App };
