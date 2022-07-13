import React from 'react';

// React.createElement poniżej to dokładnie to samo co <h1>...</h1> powyżej
const App = () => {
  return <h1 className="header">Hello world</h1>;

  // return React.createElement('h1', { className: 'header' }, 'Hello world');
};

export { App };
