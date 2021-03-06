import React, { useState, useEffect } from "react";

type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {};
  company: {};
};

type UsersType = Array<UserType>;

function Users() {
  const [users, setUsers] = useState<UsersType>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className="users">
      <h1>All Users</h1>
      <div className="users__list">
        {users &&
          users.map((user) => (
            <div className="users__card">
              <p> Name: {user.name} </p>
              <p> Email: {user.email} </p>
              <p> Phone: {user.phone} </p>
              <p> Website: {user.website} </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Users;
