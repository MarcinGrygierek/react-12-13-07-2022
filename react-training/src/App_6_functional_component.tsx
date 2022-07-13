const App = () => {
  const foo = () => {
    return 'Lorem ipsum';
  };
  // Komponent zawsze musi zwrócić element/inny komponent albo null
  return <h1>{foo()}</h1>;
};

export { App };

// zapis archaiczny
// function App() {
//     return <h1>Lorem ipsum</h1>;
// }

// export { App }
