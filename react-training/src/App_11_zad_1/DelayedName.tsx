import { useEffect, useState } from 'react';

interface Props {
  delay: number;
  name: string;
}

const DelayedName = ({ delay, name }: Props) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      // jeżeli chcielibyśmy przełączać stan na przeciwny (uzależniony od poprzedniego stanu)
      // należy skorzystać z metody dającej dostęp do poprzedniego stanu
      //   setVisible((previousVisible) => !previousVisible);
      setVisible(true);
    }, delay * 1000);
  }, []);

  if (!isVisible) return null;

  return <h1>{name}</h1>;
};

export { DelayedName };
