import { useState } from "react";

function TasksList() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  return (
    <>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => setTasks((prevTasks) => [...prevTasks, "Новая задача"])}
      >
        Добавить задачу
      </button>
      <button onClick={() => setTasks((prevTasks) => prevTasks.slice(0, -1))}>
        Удалить задачу
      </button>
    </>
  );
}

export default TasksList;
