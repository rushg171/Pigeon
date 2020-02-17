import React from "react";
import { useStyles } from "./home";

const Members = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h2>Members{console.log("Members")}</h2>
    </main>
  );
};

export default Members;
