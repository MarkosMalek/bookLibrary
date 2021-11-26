import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookCard from "./BookCard";

export default function Search(props) {
  return (
    <div>
      <input type="Text" placeholder="Enter book title " />
      <Container>
        <Row>
          {props.books.map((book) => (
            <Col key={book.id}>
              <BookCard key={book.id} book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
