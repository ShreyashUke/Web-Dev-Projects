import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to new blog';
  // const likes = 50;
// const person = {name: 'Amey', age: 20};
const link= "http://www.google.com"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"></div>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route  path={"/create"}>
            <Create />
          </Route>
          <Route  path={"/blogs/:id"}>
            <BlogDetails />   
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
