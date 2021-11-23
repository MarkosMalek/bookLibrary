import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Search from "./components/search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class BooksApp extends React.Component {
  state() {
    this.books = [];
    this.loading = true;
  }

  getBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ loading: false, books });
  };
  componentDidMount() {
    this.getBooks();
  }
  render() {
    return this.state.loading ? (
      <div>loading</div>
    ) : (
      <Router>
        <NavBar />
        <Switch>
          <Route exact="true" path="/">
            <Home books={this.state.books} />
          </Route>
        </Switch>
        <Switch>
          <Route exact="true" path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default BooksApp;
