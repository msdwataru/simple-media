import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  ArticleList as ArticleListPb,
  Article as ArticlePb,
} from "./article/article_pb";
import { ArticleServiceClient } from "./article/ArticleServiceClientPb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

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
  const [articleList, setArticleList] = useState<ArticlePb[]>([
    new ArticlePb(),
  ]);

  useEffect(() => {
    const client = new ArticleServiceClient("http://localhost:8080");

    client.getList(
      new google_protobuf_empty_pb.Empty(),
      null,
      (err, response: ArticleListPb) => {
        console.log(response);
        setArticleList(response.getArticleList());
      }
    );
  }, []);

  const classes = useStyles();
  return (
    <div>
      <h2>記事一覧</h2>
      {articleList.map((article: ArticlePb) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h5">
                <Link
                  to={{
                    pathname: `/article/${article.getId()}`,
                    state: {
                      title: `${article.getTitle()}`,
                      contents: `${article.getContents()}`,
                    },
                  }}
                  className={classes.title}
                >
                  {article.getTitle()}
                </Link>
              </Typography>
              <Typography variant="body2" component="p">
                {article.getContents()}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
