import { Component } from 'react';

class App extends Component {
  // Każdy komponent klasowy musi posiadać metodę render
  // ta metoda jest wywoływana przy każdym "rysowaniu" komponentu
  render() {
    return <h1>{this.foo()}</h1>;
  }

  foo() {
    return 'Dolor sit amet';
  }
}

export { App };
