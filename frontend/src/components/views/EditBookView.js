import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: "20px",
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
  links: {
    textDecoration: "none",
  },
}));

const EditBookView = (props) => {
  const { handleChange, handleSubmit, book } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            Edit Book
          </Typography>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e, book.id)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            onChange={(e) => handleChange(e)}
            defaultValue={book.title}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Year:{" "}
          </label>
          <input
            type="text"
            name="year"
            onChange={(e) => handleChange(e)}
            defaultValue={book.year}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            defaultValue={book.description}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            AuthorId:{" "}
          </label>
          <input
            type="text"
            name="authorId"
            onChange={(e) => handleChange(e)}
            defaultValue={book.authorId}
          />
          <br />
          <br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EditBookView;
