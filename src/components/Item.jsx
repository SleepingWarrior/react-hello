import React from "react";
import "../index.css"


function createUser(props) {
  return (
    <div className="item-container">
      <h1>My Name is {props.name + " " + props.surname}</h1>
      <img className="image" src="" alt="fabian" />
      <div>
        <h2>Personal Details</h2>
        <ul>
          <li>{props.date_of_birth}</li>
          <li>{props.country}</li>
          <li>{props.email}</li>
          <li>{props.telephone}</li>
          <li>{props.company}</li>
        </ul>
      </div>

      <h2>Interests</h2>
      <ul className="list-interests">
        <li>{props.interests[0]}</li>
        <li>{props.interests[1]}</li>
        <li>{props.interests[2]}</li>
      </ul>
    </div>
  );
}

export default createUser;
