function ChildComponent({ name, counter }) {
  return (
    <>
      <p>
        Привет, {name}. Текущее значение счётчика: {counter}
      </p>
    </>
  );
}

export default ChildComponent;
