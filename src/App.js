import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';


export default function App() {
  return (
    <Router>
      <section>
        <Nav />
        <main>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>
      </section>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}