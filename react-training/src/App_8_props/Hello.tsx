import { Component } from 'react';

interface Props {
  name: string;
}

// const Hello = (props: Props) => {
//   return <h1>Cześć {props.name}</h1>;
// };

class Hello extends Component<Props> {
  render() {
    return <h1>Cześć, {this.props.name}</h1>;
  }
}

interface PropsSum {
  a: number;
  b: number;
}

const Sum = (props: PropsSum) => {
  return <h1>Suma to: {props.a + props.b}</h1>;
};

export { Hello, Sum };
