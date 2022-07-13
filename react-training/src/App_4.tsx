import { Fragment } from 'react';

// <Fragment> i <> nie są wynikowo renderowane do DOMu - istnieją tylko i wyłącznie naa wewnętrzne potrzeby Reacta
const App = () => {
  return (
    // <Fragment>
    //   <h1>Lorem</h1>
    //   <h2>Ipsum</h2>
    // </Fragment>
    <>
      <h1>Lorem</h1>
      <h2>Ipsum</h2>
    </>
  );
};

export { App };
