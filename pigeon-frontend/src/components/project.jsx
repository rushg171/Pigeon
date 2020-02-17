import React from "react";
import { useStyles } from "./home";

const Project = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />{" "}
      <h2>Project{console.log("Project")}</h2>
    </main>
  );
};

export default Project;
