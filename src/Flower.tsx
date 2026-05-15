import { useEffect, useState } from 'react';

const Flower = () => {
  const [scheme, setScheme] = useState(1);

  useEffect(() => {
    // wylosuj numer schematu 1-6 po zamontowaniu komponentu
    const random = Math.floor(Math.random() * 6) + 1;
    setScheme(random);
  }, []);

  return (
    <div
      className="flower"
      style={{ background: `var(--color-scheme-${scheme}-dark)` }}
    >
      <div
        className="flower-inner"
        style={{ background: `var(--color-scheme-${scheme}-light)` }}
      ></div>
    </div>
  );
};

export default Flower;