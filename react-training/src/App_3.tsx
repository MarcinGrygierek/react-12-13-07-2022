const App = () => {
  const getClassName = () => {
    const random = Math.round(Math.random() * 10);
    return `element-${random}`;
  };

  return (
    <div
      id="main-element"
      className={getClassName()}
      style={{
        backgroundColor: 'red',
        fontWeight: '700',
        fontSize: '2rem',
      }}
    >
      <button disabled={true}>Can't click me</button>I have a random class name
    </div>
  );
};

export { App };
