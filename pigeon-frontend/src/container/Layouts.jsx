import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { loadProcedure } from "../actions";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "ffffff"
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  link: {
    textDecoration: "none"
  }
}));

const menu = [
  {
    title: "Dashboard",
    logo: "speedOutlined",
    link: "/dashboard"
  },
  {
    title: "Procedure",
    logo: "assignmentOutlinedIcon",
    link: "/procedure"
  },
  {
    title: "Project",
    logo: "emoji_objectsOutlinedIcon",
    link: "/Project"
  },
  {
    title: "Members",
    logo: "groupOutlinedIcon",
    link: "/members"
  },
  {
    title: "Tasks",
    logo: "playlist_add_checkOutlinedIcon",
    link: "/tasks"
  },
  {
    title: "Settings",
    logo: "settingsOutlinedIcon",
    link: "/settings"
  }
];

const Menu = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Pigeon
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <List>
          <ListSubheader>Logo</ListSubheader>
          <Divider />
          {menu.map((m, index) => {
            return (
              <ListItem component={Link} to={m.link} button key={index}>
                <ListItemIcon>
                  <Icon>{m.logo}</Icon>
                </ListItemIcon>

                <ListItemText>{m.title}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
