interface Props {
  a: number;
  b: number;
}

// Użycie destrukturyzacji aby uprościć korzystanie z propsów - v1
// const Sum = (props: Props) => {
//   const { a, b } = props;
//   return <h2>Wynik dodawania to: {a + b}</h2>;
// };

// Użycie destrukturyzacji aby uprościć korzystanie z propsów - v2
const Sum = ({ a, b }: Props) => {
  return <h2>Wynik dodawania to: {a + b}</h2>;
};

export { Sum };
