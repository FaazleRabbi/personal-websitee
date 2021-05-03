import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog/Blog";
import Contact from "./Components/Contact/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Project from "./Components/Project/Project/Project";
import ProjectDetails from "./Components/Project/Project/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/project">
          <Project></Project>
        </Route>
        <Route exact path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/project/:id">
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
