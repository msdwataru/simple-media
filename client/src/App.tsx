import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import "./App.css";
import { ArticleList } from "./ArticleList";
import { Article } from "./Article";
import { ArticleCreate } from "./ArticleCreate";
import styled from "styled-components";

const useStyles = makeStyles({
  icon: {
    paddingRight: 5,
  },
  homeLink: {
    color: "white",
    textDecoration: "none",
    fontSize: 18,
  },
  button: {
    color: "inherit",
    right: "8%",
    position: "fixed",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <LibraryBooksIcon className={classes.icon} />
        <Link className={classes.homeLink} to="/">
          Simple Media Searvice
        </Link>
        <Button className={classes.button} component={Link} to="/create">
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={ArticleList} />
        <Route path="/article/:id" component={Article} />
        <Route path="/create" component={ArticleCreate} />
      </Router>
    </div>
  );
}

export default App;
