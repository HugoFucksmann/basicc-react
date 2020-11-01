//generate: rafc
import React from 'react'
const Book = (props) => {
  //atribute, eventhandler, onclick onmouseover
  const { img, titulo, autor } = props;
  const clickHandler = (e) => {
    alert("hello!");
    console.log(e.target);
  };
  const complex = (autor) => console.log(autor);
  return (
    <article className="book" onMouseOver={() => {}}>
      <img src={img} style={{ height: "200px" }} />
      <h1>{titulo}</h1>
      <h4>{autor}</h4>
      <button type="button" onClick={clickHandler}>
        click!
      </button>
      {/*  sin fun anon se ejecuta al cargar */}
      <button type="button" onClick={() => complex(autor)}>
        click!
      </button>
    </article>
  );
};

export default Book
