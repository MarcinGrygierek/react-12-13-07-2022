import './App.css';

const App = () => {
  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <input type="number" name="first" />
        <input type="number" name="second" />
      </div>
      <div className="calculator-result">10</div>
      <div className="calculator-buttons">
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>
      </div>
    </div>
  );
};

export { App };
