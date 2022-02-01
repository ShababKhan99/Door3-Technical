import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  AuthorContainer,
  BookContainer,
  AllAuthorsContainer,
  AllBooksContainer,
  NewAuthorContainer,
  NewBookContainer,
  EditBookContainer,
  EditAuthorContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a book or author, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/authors" component={AllAuthorsContainer} />
        <Route exact path="/newauthor" component={NewAuthorContainer} />
        <Route exact path="/author/:id" component={AuthorContainer} />
        <Route exact path="/books" component={AllBooksContainer} />
        <Route exact path="/newbook" component={NewBookContainer} />
        <Route exact path="/book/:id" component={BookContainer} />
        <Route exact path="/editbook" component={EditBookContainer} />
        <Route exact path="/editauthor" component={EditAuthorContainer} />

      </Switch>        
    </div>
  );
}

export default App;
