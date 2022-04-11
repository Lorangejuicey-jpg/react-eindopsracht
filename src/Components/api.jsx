import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    // fetch("https://pokeapi.co/api/v2/berry/1/")
    //   .then((res) => res.json())
    //   .then((result) => setUsers(result))
    //   .catch(console.log("error"));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default UsingFetch;
