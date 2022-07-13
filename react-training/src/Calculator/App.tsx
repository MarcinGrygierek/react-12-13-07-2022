import { ChangeEvent, useState } from 'react';
import { CalculatorButtons } from './CalculatorButtons';
import { CalculatorResult } from './CalculatorResult';
import { CalculatorInputs } from './CalculatorInputs';
import './App.css';

const App = () => {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [result, setResult] = useState<number | string>();

  const handleFirstChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirst(event.target.value);
  };

  const handleSecondChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecond(event.target.value);
  };

  const add = () => {
    setResult(Number(first) + Number(second));
  };

  const subtract = () => {
    setResult(Number(first) - Number(second));
  };

  const multiply = () => {
    setResult(Number(first) * Number(second));
  };

  const divide = () => {
    const secondNumber = Number(second);

    if (secondNumber === 0) {
      setResult('Nie możesz dzielić przez 0!');
      return;
    }

    setResult(Number(first) / Number(second));
  };

  return (
    <div className="calculator">
      <CalculatorInputs
        first={first}
        second={second}
        handleFirstChange={handleFirstChange}
        handleSecondChange={handleSecondChange}
      />
      <CalculatorResult result={result} />
      <CalculatorButtons
        add={add}
        subtract={subtract}
        divide={divide}
        multiply={multiply}
      />
    </div>
  );
};

export { App };
