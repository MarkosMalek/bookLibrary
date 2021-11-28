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

  //get all books
  getBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books, loading: false });
  };

  //update books category
  updateHandler = async (book, shelf) => {
    this.setState({ loading: true });
    await BooksAPI.update(book, shelf);
    this.getBooks();
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
          <NavBar />
          <div>
            <Switch>
              <Route path="/" exact>
                <Home
                  books={this.state.books}
                  updateHandler={this.updateHandler}
                />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/search">
                <Search
                  books={this.state.books}
                  updateHandler={this.updateHandler}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
