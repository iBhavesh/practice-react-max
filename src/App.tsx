import React, { useState } from "react";
import "./App.css";
import "./index.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import { User } from "./helpers/helpers";

function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const addUser = (user: User) => {
    setUserList((prevList) => [user, ...userList]);
  };
  const deleteUser = (id: string) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setUserList(newUserList);
  };

  return (
    <>
      <NewUser onAddUser={addUser} />
      <UserList onDeleteItem={deleteUser} userList={userList} />
    </>
  );
}

export default App;
