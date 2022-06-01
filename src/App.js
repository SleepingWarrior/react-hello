import React from "react";
import "./index.css"
import Item from "./components/Item";
import user from "./user";
import AlertDismissible from "./components/Alert";

const { interests } = user; //Destructure the object to get the array interests
function App() {
  return (
    <div className="app-container">
      <AlertDismissible />
      <Item //Pass the properties as attributes of the element "Item"
        name={user.name}
        surname={user.surname}
        date_of_birth={user.date_of_birth}
        country={user.country}
        email={user.email}
        telephone={user.telephone}
        company={user.company}
        interests={interests}
      />
    </div>
  );
}

export default App;
