import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

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
    marginBottom: "20px",
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
    "&:hover": {
      color: "#eab676",
    },
  },
  text2 :{
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    "&:hover": {
      color: "#eab676",
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

const AllBooksView = (props) => {
  const { books, deleteBook, deleteBooks } = props;
  const classes = useStyles();

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

      {books.length > 0 ? (
        books.map((book) => (
          <ul key={book.id} className={classes.text}>
            <li>
              <Link to={`/book/${book.id}`} className={classes.text2}>
                {book.title}{"-"}{book.year}
              </Link>
              <FaTimes
                className="icon-delete"
                onClick={() => deleteBook(book.id)}
              />
            </li>
          </ul>
        ))
      ) : (
        <p className={classes.text}>There are no books.</p>
      )}
      <button
        className={classes.button}
        onClick={() => deleteBooks(books)}
      >
        Delete All Books
      </button>
      <Link to={`/newbook`}>
        <button className={classes.button}>Add New book</button>
      </Link>
    </div>
  );
};

AllBooksView.propTypes = {
  allBooks: PropTypes.array.isRequired,
};

export default AllBooksView;
