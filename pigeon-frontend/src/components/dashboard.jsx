import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./home";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Typography>Dashboard{console.log("Dashboard")}</Typography>
    </main>
  );
};

export default Dashboard;
