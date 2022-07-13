import { HelloWorld } from './HelloWorld';
import './App_2.css';

const App = () => {
  const val = 'Lorem ipsum';

  const getName = () => {
    return 'Marcin Grygierek';
  };

  const getSum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div>
      <h1 className="header">{2 + 2}</h1>
      <HelloWorld />
      <p>{val}</p>
      <p>{getName()}</p>
      <p>{getSum(10, 20)}</p>
    </div>
  );
};

export { App };
