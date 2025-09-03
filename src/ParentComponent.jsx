import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

function ParentComponent() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Счётчик: {counter}</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() => setCounter(Math.floor(Math.random() * 10 + 1))}>
        Случайное значение
      </button>
      <button
        onClick={() =>
          setCounter((counter) => (counter > 0 ? counter - 1 : counter))
        }
      >
        Уменьшить
      </button>
      <ChildComponent name="Dima" counter={counter} />
      <SiblingComponent />
    </>
  );
}

export default ParentComponent;
