import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";

export default class App extends Component {
  state = {
    loading: true,
    books: [],
  };
  getBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ loading: false, books });
  };
  componentDidMount() {
    this.getBooks();
  }
  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <Router>
          {console.log(this.state.books)}
          <NavBar />
          <div>
            <Switch>
              <Route path="/" exact>
                <Home books={this.state.books} />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/search">
                <Search books={this.state.books} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
