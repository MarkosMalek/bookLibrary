import React from "react";
import "../App.css";
import { Card, Dropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard(props) {
  const { book, updateShelf, shelf } = props;
  const setActive = (bookShelf, cShelf) => {
    if (bookShelf === cShelf) {
      return true;
    } else {
      return false;
    }
  };
  return book ? (
    <div className="book">
      <Card style={{ width: "18rem", backgroundColor: "#f8f9fa" }}>
        <Card.Img
          style={{ maxHeight: "300px" }}
          className="container"
          variant="top"
          src={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://images.unsplash.com/photo-1621864065824-b1c2cdaff221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          }
        />
        <Card.Body>
          <Card.Title className="list-books-title">{book.title}</Card.Title>
          <Card.Text> {book.subtitle}</Card.Text>
          <Card.Text>
            By{" "}
            {book.authors ? (
              <strong>
                {book.authors.map((auther) => auther).join(" | ")}
              </strong>
            ) : (
              <div>Not Mentioned</div>
            )}
          </Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Move to...
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Button}
                value="currentlyReading"
                onClick={(e) => updateShelf(book, e.target.value)}
                active={setActive(shelf, "currentlyReading")}
              >
                Currently Reading
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                value="wantToRead"
                onClick={(e) => updateShelf(book, e.target.value)}
                active={setActive(shelf, "wantToRead")}
              >
                Want to Read
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                value="read"
                onClick={(e) => updateShelf(book, e.target.value)}
                active={setActive(shelf, "read")}
              >
                Read
              </Dropdown.Item>
              <Dropdown.Item
                as={Button}
                value="None"
                onClick={(e) => updateShelf(book, e.target.value)}
                active={setActive(shelf, null)}
              >
                None
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/books/${book.id}`}>
                More Detailes...
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <div>Loading</div>
  );
}
