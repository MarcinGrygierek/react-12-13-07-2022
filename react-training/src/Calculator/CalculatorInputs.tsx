import { ChangeEvent } from 'react';
import './CalculatorInputs.css';

interface Props {
  first: string;
  second: string;
  handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorInputs = ({
  first,
  second,
  handleFirstChange,
  handleSecondChange,
}: Props) => {
  return (
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
  );
};

export { CalculatorInputs };
