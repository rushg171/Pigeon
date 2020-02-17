import React from "react";
import ListProcedure from "./list-procedure";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { loadProcedure } from "../../actions";
export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 960
  },
  contentWrapper1: {
    minWidth: "100%",
    marginBottom: 10,
    padding: 10,
    paddingLeft: 25
  },
  contentWrapper2: {
    minHeight: 550,
    maxHeight: 550,
    overflow: "auto"
  },
  cardHeader: {
    margin: 0,
    paddingTop: 5,
    paddingLeft: 50,
    paddingBottom: 0
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Procedure = props => {
  const classes = useStyles();
  // const { error, loading, success, handleProcedure } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container className={classes.root} maxWidth="md">
        <Card elevation={1} className={classes.contentWrapper1} square>
          <Typography variant="h6">Procedure</Typography>
        </Card>
        <Button onClick={() => props.handleProcedure()}>Get Data</Button>
        <Card elevation={0} className={classes.contentWrapper2} square>
          <CardHeader
            className={classes.cardHeader}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="Name"
          />
          <ListProcedure />
        </Card>
      </Container>
    </main>
  );
};
const mapStateToProps = ({ error, loading, success }) => ({
  error,
  loading,
  success
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleProcedure: loadProcedure
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Procedure);
