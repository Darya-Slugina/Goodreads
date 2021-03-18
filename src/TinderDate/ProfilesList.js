import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function ProfilesList({ profiles, onDelete }) {
  return (
    <React.Fragment>
      {profiles.map((user) => (
        <div key={user.id}>
          <img src={user.image} alt={user.name} />
          <h3>Zdraveti az sum {user.name}. Sega shte te izpapam :*</h3>
          <Button onClick={() => onDelete(user.id)} value={"Mahni go toq"} />
          <Link to={"/matches/" + user.id}>Vij Profila</Link>
        </div>
      ))}
    </React.Fragment>
  );
}
