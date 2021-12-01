import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Row, Col, Container } from "react-bootstrap";
import BookCard from "./BookCard";
import { debounce } from "lodash";

export default class Search extends Component {
  state = {
    loading: true,
    searchInput: "",
    searchBooks: this.props.books,
  };

  //search for a book
  search = async (searchInput) => {
    this.setState({ loading: true });
    if (searchInput) {
      const res = await BooksAPI.search(searchInput);
      if (res.error === "empty query") {
        this.setState({ searchBooks: null });
      } else {
        this.setState({ searchBooks: res });
        this.setState({ loading: false });
      }
    }
  };
  //add debounce to the search to prevent firing a requist every single time the change event in the search triggered
  onChange = debounce((e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });

    this.search(this.state.searchInput);
  }, 1000);
  shelf = null;
  setShelf = (book) => {};
  render() {
    return (
      <div className="container">
        <input
          type="Text"
          placeholder="Enter Book Title "
          onChange={(e) => this.onChange(e)}
        />

        {this.state.loading ? (
          <div className="books-grid">No Books with that Title</div>
        ) : (
          <Container className="books-grid">
            <Row>
              {this.state.searchBooks ? (
                this.state.searchBooks.map((book) => (
                  <Col xs={6} sm={4} md={3} key={book.id}>
                    {(this.shelf = null)}
                    {this.props.books.map((mainbook) => {
                      if (mainbook.id === book.id) {
                        this.shelf = mainbook.shelf;
                      }
                    })}
                    <BookCard
                      key={book.id}
                      book={book}
                      updateShelf={this.props.updateHandler}
                      shelf={this.shelf}
                    />
                  </Col>
                ))
              ) : (
                <div>No Books with that Title</div>
              )}
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
