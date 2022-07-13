import './CalculatorButtons.css';

interface Props {
  add: () => void;
  subtract: () => void;
  divide: () => void;
  multiply: () => void;
}

const CalculatorButtons = ({ add, subtract, divide, multiply }: Props) => {
  return (
    <div className="calculator-buttons">
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={divide}>/</button>
      <button onClick={multiply}>*</button>
    </div>
  );
};

export { CalculatorButtons };
