import react, { useState } from "react";
import AddUser from "./Components/Users/AddUsers";
import "./App.css";
import UserList from "./Components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([
    {
      id: "q1",
      name: "Ahsan",
      age: 12,
    },
    {
      id: "q2",
      name: "Faiz",
      age: 13,
    },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
