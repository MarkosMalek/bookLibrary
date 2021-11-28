import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

import { Row, Col, Container } from "react-bootstrap";
import BookCard from "./BookCard";

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
  onChange = async (e) => {
    e.preventDefault();
    await this.setState({ searchInput: e.target.value });
    this.search(this.state.searchInput);
  };
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
                    <BookCard
                      key={book.id}
                      book={book}
                      updateShelf={this.props.updateHandler}
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
