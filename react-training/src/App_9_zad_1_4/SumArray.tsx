interface Props {
  numbers: number[];
}

const SumArray = ({ numbers }: Props) => {
  // reduce domyślnie inicjalizuje acc na pierwszy element w tablicy
  // jeżeli użyjemy drugiego parametru z reduce - czyli wartości początkowej akumulatora
  // to curr dostaje pierwszy element tablicy
  const sum = numbers.reduce((acc, curr) => {
    console.log(`ACC: ${acc} CURR: ${curr}`);
    return acc + curr;
  });

  return <p>Suma tablicy to: {sum}</p>;
};

export { SumArray };
