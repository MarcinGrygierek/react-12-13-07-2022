import './CalculatorResult.css';

interface Props {
  result: string | number | undefined;
}

const CalculatorResult = ({ result }: Props) => {
  const formatResult = (result: number | string | undefined) => {
    if (typeof result === 'number') return result.toFixed(2);
    if (typeof result === 'string') return result;
    return '-';
  };

  return <div className="calculator-result">{formatResult(result)}</div>;
};

export { CalculatorResult };
