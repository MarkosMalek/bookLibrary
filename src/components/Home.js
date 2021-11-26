import React from "react";

export default function Home(props) {
  return (
    <div>
      {props.books.map((book) => (
        <div>{book.title}</div>
      ))}
    </div>
  );
}
