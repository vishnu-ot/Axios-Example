import React from "react";
import "./Users.css";
export function Users({ usersList, personDeleteHandler }) {
  
  return (
    <div>
      <h1 className="title-class">Users Data</h1>

      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>
                  <button
                    onClick={() => personDeleteHandler(person.id)}
                    style={{ color: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
