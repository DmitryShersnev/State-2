import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <>
      <h1>Профиль пользователя</h1>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "да" : "нет"}</p>
      <button
        onClick={() => setUser((prevUser) => ({ ...prevUser, name: "Дима" }))}
      >
        Сменить имя
      </button>
      <button
        onClick={() =>
          setUser((prevUser) => ({ ...prevUser, age: user.age + 1 }))
        }
      >
        Увеличить возраст
      </button>
      <br />
      <button
        onClick={() =>
          setUser((prevUser) => ({ ...prevUser, isActive: !user.isActive }))
        }
      >
        Переключить активность
      </button>
    </>
  );
}

export default UserProfile;
