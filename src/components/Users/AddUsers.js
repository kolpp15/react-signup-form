import React from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>

        <label htmlFor="username">Age (Years)</label>
        <input id="username" type="number"></input>

        <Button type="submit">Add Users</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
