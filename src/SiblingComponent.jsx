import { useState } from "react";

function SiblingComponent() {
  const [state, setState] = useState("TEXT");
  return (
    <>
      <p>Текущий текст: {state}</p>
      <button onClick={() => setState("REDEV")}>Изменить текст</button>
    </>
  );
}

export default SiblingComponent;
