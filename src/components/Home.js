import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookCard from "./BookCard";

export default function Home(props) {
  const { books, updateHandler } = props;
  return (
    <Container>
      <Row>
        <Container className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <Row>
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
          </Row>
        </Container>

        <Container className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <Row>
            {books.map((book) => {
              if (book.shelf === "wantToRead") {
                return (
                  <Col xs={6} sm={4} md={3} key={book.id}>
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
          </Row>
        </Container>
        <Container className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <Row>
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
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
