// 2hs38min
import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";
import {books} from './books'
import Book from "./book";

function BookList() {
  return (
    <section className="booklist">
        { books.map((book, index) => {
          //const { img, titulo, autor } = book;
          //return <Book key={index} book={book} />
          return <Book key={index} {...book} />;
        }) }
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
