import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";

export default class App extends Component {
  getBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ loading: false, books });
  };
  componentDidMount() {
    this.getBooks();
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
