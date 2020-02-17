import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteById } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  contentWrapper1: {
    display: "flex",
    minWidth: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 25
  },
  cw2: {
    marginLeft: 15
  },
  cw3: {
    marginRight: 0,
    padding: 0
  },
  cw4: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  },
  cw5: {
    marginLeft: "auto",
    marginRight: 40
  }
}));

const ListProcedure = props => {
  const classes = useStyles();
  const { success, handleDelete } = props;
  return (
    <div>
      <List>
        {success.map((m, index) => {
          return (
            <ListItem key={m._id}>
              <Card className={classes.contentWrapper1} elevation={1} square>
                <Button className={classes.cw3}>
                  <Typography>
                    #{`${index + 1} `}
                    <Box component="span" className={classes.cw2}>
                      |
                    </Box>
                    <Box component="span" className={classes.cw2}>
                      {m.name}
                    </Box>
                  </Typography>
                </Button>
                <div className={classes.cw5}>
                  <IconButton right="modal" aria-label="add to favorites">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(m._id)}
                    right="modal"
                    aria-label="add to favorites"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const mapStateToProps = ({ error, loading, success, deleteById }) => ({
  error,
  loading,
  success,
  deleteById
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleDelete: deleteById
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProcedure);
