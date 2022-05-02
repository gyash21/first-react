import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function BookList() {

  return (
    <section className="booklist">
      <Book />
    </section >
  );
}

const author = 'Morgan Housel'
const Book = () => {
  const title = 'The Psychology of Money'
  return (
    < article className="book" >
      <img src='https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg' alt='' />
      <h4>{title}</h4>
      <h5>{author.toUpperCase()}</h5>
    </article >);
}



ReactDOM.render(<BookList />, document.getElementById('root'));

