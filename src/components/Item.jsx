import React from "react";

function createUser(props) {
  return (
    <div>
      <h1>My Name is {props.name + " " + props.surname}</h1>
      <img className="image" src="" alt="fabian" />
      <div>
        My Personal Details:
        <ul>
          <li>{props.date_of_birth}</li>
          <li>{props.country}</li>
          <li>{props.email}</li>
          <li>{props.telephone}</li>
          <li>{props.company}</li>
        </ul>
      </div>

const li = {React.createElement('li',{}, 'hockey')}

      <h2>My Interests</h2>
      <ul>
        <li>{props.interests[0]}</li>
        <li>{props.interests[1]}</li>
        <li>{props.interests[2]}</li>
      </ul>
    </div>
  );
}

export default createUser;
