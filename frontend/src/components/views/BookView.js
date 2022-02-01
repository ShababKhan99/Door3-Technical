import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "35px",
    color: "#FFFFFF",
    textDecoration: "none",
    transition: "0.3s",
    textAlign: "left",
    "&:hover": {
      color: "#063970",
    },
  },
  appBar: {
    backgroundColor: "#eab676",
    shadows: ["none"],
  },
  formTitle: {
    backgroundColor: "#c5c8d6",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
  name: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "40px",
    marginLeft: "80px",
    marginTop: '30px'
  },
  author: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "30px",
    marginLeft: "80px",
    "&:hover": {
      color: "#eab676",
    },
  },
  text: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    marginLeft: "80px",
    marginTop: '10px'
  },
  links: {
    textDecoration: "none",
  },
  button: {
    marginLeft: "80px",
    marginTop: "20px",
    background: "#Adadad",
    padding: "8px 24px",
    "border-radius": "9px",
    color: "black",
    border: "3px solid #3f3f3f",
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": {
      background: "#eab676",
      color: "white",
    },
  },
}));

const BookView = (props) => {
  const { book, author, deleteBook, editBook } = props;
  const classes = useStyles();
  console.log("book: ", book.authorId);

    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={"/"}>
            <Typography variant="h6" className={classes.title} color="inherit">
              The Land of Books
            </Typography>
          </Link>

          <Link className={classes.links} to={"/authors"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Authors
            </Button>
          </Link>

          <Link className={classes.links} to={"/books"}>
            <Button variant="contained" color="primary">
              Books
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
        <h1 className={classes.name}>
          {book.title}
        </h1>
        <h2>
          <Link to={`/author/${book.authorId}`} className={classes.author}>
            {author.name}
          </Link>
        </h2>
        <br />
        <h3 className = {classes.text}>
          {book.description}
        </h3>
        <Link to={`/editbook`}>
          <button className={classes.button}>Edit Book</button>
        </Link>
        <button
          onClick={() => deleteBook(book.id)}
          className={classes.button}
        >
          Delete Book
        </button>
      </div>
    );
};

export default BookView;
