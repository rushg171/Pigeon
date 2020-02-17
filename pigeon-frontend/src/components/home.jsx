import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createPortal } from "react-dom";

export const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="md">
        <Typography variant="h6">
          Home is Really Good Sometimes but home is just a beginning to start
          your path into the long unknown.
        </Typography>
      </Container>
    </main>
  );
};

export default Home;
