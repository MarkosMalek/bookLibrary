import React from "react";
import "../App.css";
import { Card, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard(props) {
  return (
    <div className="book">
      <Card style={{ width: "18rem", backgroundColor: "#f8f9fa" }}>
        <Card.Img
          style={{ maxHeight: "300px" }}
          className="container"
          variant="top"
          src={props.book.imageLinks.thumbnail}
        />
        <Card.Body>
          <Card.Title className="list-books-title">
            {props.book.title}
          </Card.Title>
          <Card.Text>
            {props.book.authors.map((auther) => auther).join(" | ")}
          </Card.Text>
          <div className="books-grid">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Move to...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Currently Reading
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Want to Read</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Read</Dropdown.Item>
                <Dropdown.Item href="#/action-3">None</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              style={{ color: "bcc5bcb4" }}
              as={Link}
              to={`/books/${props.book.id}`}
            >
              More Detailes...
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
