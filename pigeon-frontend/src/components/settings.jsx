import React from "react";
import { useStyles } from "./home";

const Settings = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h2>Settings{console.log("Settings")}</h2>
    </main>
  );
};

export default Settings;
