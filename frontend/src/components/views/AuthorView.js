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
  text: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    marginLeft: "80px",
    marginTop: '10px'
  },
  bookName: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "35px",
    marginLeft: "80px",
    marginTop: '30px'
  },
  book: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    transition: "0.2s",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#eab676",
    },
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

const AuthorView = (props) => {
  const { author, deleteAuthor } = props;
  const classes = useStyles();
  console.log("author: ", author.books);

  if (author.books.length === 0) {
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

        <h1 className={classes.bookName}>{author.name}</h1>
        <p className={classes.text}>
          {"Date of Birth: " + author.dob} <br />
          <br />
          {author.description} <br />
        </p>
        <h2 className={classes.text}>
          There are no books written by this author
        </h2>
        <Link to={`/editauthor`}>
          <button className={classes.button}>Edit Author</button>
        </Link>
        <button
          onClick={() => deleteAuthor(author.id)}
          className={classes.button}
        >
          Delete Author
        </button>
      </div>
    );
  } else {
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
        <h1 className={classes.bookName}>{author.name}</h1>
        <p className={classes.text}>
          {"Date of Birth: " + author.dob} <br />
          <br />
          {author.description} <br />
        </p>
        <h3 className={classes.text}>Books written by this Author: </h3>
        <ul>
          {author.books.map((book) => {
            let name = book.title + " - " + book.year;
            return (
              <li key={book.id} className={classes.text}>
                <Link to={`/book/${book.id}`} className={classes.book}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to={`/editauthor`}>
          <button className={classes.button}>Edit Author</button>
        </Link>
        <button
          onClick={() => deleteAuthor(author.id)}
          className={classes.button}
        >
          Delete Author
        </button>
      </div>
    );
  }
};

export default AuthorView;
