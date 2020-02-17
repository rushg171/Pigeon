import React from "react";
import { useStyles } from "./home";

const Tasks = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h2>Tasks{console.log("Tasks")}</h2>
    </main>
  );
};

export default Tasks;
