import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import image from './homepageimage.jpg';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      color: "#3c1266",
    },
  },
  appBar: {
    backgroundColor: "#eab676",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    marginLeft: "80px",
  },
  text:{
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none', 
    color: '#FFFFFF',
    fontSize: '20px',
    marginLeft: '80px'
  },
  image:{
    display: 'block',
    'margin-left': 'auto',
    'margin-right': 'auto',
    width: '50%'
  }

}));

const HomePageView = () => {
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

      <div className={classes.greeting}>
        <h1>About us</h1>
      </div>
      <div className={classes.text}>
        <p>
          This website is an encyclopedia for books, and you may add and find books to your pleasing.{" "}
        </p>
      </div>
      <img src={image} alt="image" className={classes.image}/>
    </div>
  );
};

export default HomePageView;
