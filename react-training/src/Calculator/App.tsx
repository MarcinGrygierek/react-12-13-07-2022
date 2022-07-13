import { ChangeEvent, useState } from 'react';
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

  const formatResult = (result: number | string | undefined) => {
    if (typeof result === 'number') return result.toFixed(2);
    if (typeof result === 'string') return result;
    return '-';
  };

  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <input
          type="number"
          name="first"
          value={first}
          onChange={handleFirstChange}
        />
        <input
          type="number"
          name="second"
          value={second}
          onChange={handleSecondChange}
        />
      </div>
      <div className="calculator-result">{formatResult(result)}</div>
      <div className="calculator-buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={divide}>/</button>
        <button onClick={multiply}>*</button>
      </div>
    </div>
  );
};

export { App };
