// 2hs38min
import React, { Children } from 'react';
import ReactDom from 'react-dom'

// CSS
import './index.css';
//setup variables
const titulo = "lo que paso";
const autor = "Hillary Clinton";
const img = "https://imgv2-2-f.scribdassets.com/img/word_document/387331332/149x198/576db79594/1601685541?v=1"
//--------------------------------
const Image = () => <img src={img} alt="libro" />;
const Title = () => <h1>{titulo}</h1>
const Author = () => <h4 style={{color:'#67d98', fontSize:'0.75rem'}}>{autor}</h4> 
//----------------------------------
const firstBook = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCBuhJOywO-bKA9NqyybvvmY-EAKdZl8jjmQ&usqp=CAU',
  titulo: 'La piedra filosofal',
  autor: 'JK R'
}
const seconddBook = {
  img:
    "https://imgv2-2-f.scribdassets.com/img/word_document/387331332/149x198/576db79594/1601685541?v=1",
  titulo: "lo que paso",
  autor: "Hillary Clinton",
};
//--------------------------------
//first letter capittal for react know
function BookList(){
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        titulo={firstBook.titulo}
        autor={firstBook.autor}
      >
        <p>
          lorem ipsu set amet
        </p>
      </Book>
      <Book
        img={seconddBook.img}
        titulo={seconddBook.titulo}
        autor={seconddBook.autor}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, titulo, autor, children } = props;
  return (
    <article className="book">
      <img src={props.img} style={{height: '230px'}} />
      <h1>{props.titulo}</h1>
      <h4>{autor}</h4>
      {children}
    </article>
  );
}
/* const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  );
} */ 

/* const Greeting = () => {
  return React.createElement('h1', {}, 'hello friend')
} */

ReactDom.render(<BookList />, document.getElementById("root"));