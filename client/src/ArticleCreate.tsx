import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: "80%",
    height: "100%",
    boxShadow: "0 3px 5px 2px #9aa8b84b",
    marginRight: "auto",
    marginLeft: "auto",
    margin: 5,
  },
  form: {
    margin: 10,
  },
});

const defaultValues = {
  title: "",
  content: "",
};

export const ArticleCreate: React.FC = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      <h2>記事作成</h2>
      <Card className={classes.card}>
        <form>
          <TextField
            className={classes.form}
            name="title"
            label="Title"
            type="text"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <br />
          <TextField
            className={classes.form}
            name="content"
            label="Content"
            type="text"
            value={formValues.content}
            onChange={handleInputChange}
            multiline
            rows={7}
            rowsMax={100}
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            投稿
          </Button>
        </form>
      </Card>
    </>
  );
};
