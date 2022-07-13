import { Sum } from './Sum';
import { SumArray } from './SumArray';

const App = () => {
  const number1 = Number(window.prompt('Podaj pierwszą liczbę'));
  const number2 = Number(window.prompt('Podaj drugą liczbę'));

  if (isNaN(number1) || isNaN(number2)) {
    return <p>Musisz podać liczby!</p>;
  }

  if (!isFinite(number1 + number2)) {
    return <p>Podałeś zbyt duże liczby!</p>;
  }

  return (
    <div>
      <h1>Sumator</h1>
      <Sum a={number1} b={number2} />
      <SumArray numbers={[1, 2, 3, 4, 6]} />
    </div>
  );
};

export { App };
