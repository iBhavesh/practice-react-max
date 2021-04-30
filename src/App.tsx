import React from "react";
import "./App.css";
import "./index.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div>
      <NewUser />
      <UserList />
    </div>
  );
}

export default App;
