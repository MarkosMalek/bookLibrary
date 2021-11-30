import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookCard from "./BookCard";

export default function Home(props) {
  const { books, updateHandler } = props;
  return (
    <Container>
      <Row>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="books-grid">
            {books.map((book) => {
              if (book.shelf === "currentlyReading") {
                return (
                  <Col key={book.id}>
                    <BookCard
                      key={book.id}
                      book={book}
                      shelf={book.shelf}
                      updateShelf={updateHandler}
                    />
                  </Col>
                );
              }
            })}
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="books-grid">
            {books.map((book) => {
              if (book.shelf === "wantToRead") {
                return (
                  <Col key={book.id}>
                    <BookCard
                      key={book.id}
                      book={book}
                      updateShelf={updateHandler}
                      shelf={book.shelf}
                    />
                  </Col>
                );
              }
            })}
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="books-grid">
            {books.map((book) => {
              if (book.shelf === "read") {
                return (
                  <Col key={book.id}>
                    <BookCard
                      key={book.id}
                      book={book}
                      updateShelf={updateHandler}
                      shelf={book.shelf}
                    />
                  </Col>
                );
              }
            })}
          </div>
        </div>
      </Row>
    </Container>
  );
}
