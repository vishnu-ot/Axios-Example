import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./Components/Users";
import axios from "axios";

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const personDeleteHandler = (id) => {
    const newList=usersList.filter((person) => {
      return person.id !== id;
    });
   setUsersList(newList)
  };
  return (
    <div className="user-container">
      <Users usersList={usersList} personDeleteHandler={personDeleteHandler} />
    </div>
  );
}

export default App;
