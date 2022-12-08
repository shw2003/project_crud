import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

import "./styles.css";

const App = () => {
  const usersData = [
    {
      id: 1,
      name: "Shweta",
      username: "Shw",
      mobile: "9708767678",
      email: "kamal@gmail.com",
      address: "bengaluru"
    },
    {
      id: 2,
      name: "ram",
      username: "ram01",
      mobile: "9708767678",
      email: "kamal@gmail.com",
      address: "bengaluru"
    },
    {
      id: 3,
      name: "ryan",
      username: "ryan01",
      mobile: "9708767678",
      email: "kamal@gmail.com",
      address: "bengaluru"
    }
  ];

  //state
  const [users, setUsers] = useState(usersData);

  //Add User
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Update User
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
    mobile: "",
    email: "",
    address: ""
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      mobile: user.mobile,
      email: user.email,
      address: user.address
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
