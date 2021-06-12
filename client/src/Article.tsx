import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Article as PbArticle } from "./article/article_pb";

const useStyles = makeStyles({
  root: {
    width: "80%",
    height: "100%",
    boxShadow: "0 3px 5px 2px #9aa8b84b",
    marginRight: "auto",
    marginLeft: "auto",
    margin: 5,
  },
});

export const Article: React.FC = () => {
  const location = useLocation<PbArticle.AsObject>();
  const article = location.state;
  const classes = useStyles();
  return (
    <>
      <h2>{article.title}</h2>
      <Card className={classes.root}>
        <CardContent>{article.contents}</CardContent>
      </Card>
    </>
  );
};
