import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    boxShadow: "0 3px 5px 2px #9aa8b84b",
    marginRight: "auto",
    marginLeft: "auto",
    margin: 5,
  },
  title: {
    fontSize: 16,
    textDecoration: "none",
  },
});

export const ArticleList: React.FC = () => {
  function getArticleList() {
    // stub
    return [
      { title: "hoge", contents: "aaaaa" },
      { title: "fuga", contents: "bbbbb" },
      { title: "foo", contents: "ccccc" },
    ];
  }

  let articleList = getArticleList();

  const classes = useStyles();
  return (
    <div>
      <h2>記事一覧</h2>
      {articleList.map((article) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h5">
                <Link
                  to={{
                    pathname: `/article/${article.title}`,
                    state: {
                      title: `${article.title}`,
                      contents: `${article.contents}`,
                    },
                  }}
                  className={classes.title}
                >
                  {article.title}
                </Link>
              </Typography>
              <Typography variant="body2" component="p">
                {article.contents}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
