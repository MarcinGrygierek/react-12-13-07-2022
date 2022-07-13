import { useEffect, useState } from 'react';

interface Props {
  delay: number;
  id: string;
}

const Counter = ({ delay, id }: Props) => {
  // pierwszy element to zmienna stanowa - możemy ją wykorzystać do wyświetlenia/obliczeń,
  // nie możemy jej bezpośrednio modyfikować!
  // do aktualzacji zmiennej stanowej służy drugi element - metoda setCounter (nazwa dowolna)
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Ustawiono/zmieniono identyfikator');
  }, [id]);

  useEffect(() => {
    console.log('Komponent został zamontowany');

    const interval = setInterval(() => {
      console.log(`Wykonałem opóźnienie o ${delay} sekund`);
      setCounter((prevCounter) => prevCounter + 1);
    }, delay * 1000);

    // z useEffect można zwrócić funkcję która zostanie wywołana w momencie zakończenia życia komponentu (odmontowania z DOMu)
    return () => {
      console.log('Komponent został odmontowany');
      clearInterval(interval);
    };
  }, []);

  return (
    <h1>
      Jestem timeoutem {id}, minęło {counter} iteracji
    </h1>
  );
};

export { Counter };
