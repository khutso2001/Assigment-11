import React from "react";
import "./card.css";
function Card({ title, author, description, image }) {
  function consoleBook() {
    console.log(`Book Title: ${title}`);
    console.log(`Author: ${author}`);
  }
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="cardInfo">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="author">
          <span>Author:</span> {author}
        </p>
        <button className="btn" onClick={() => consoleBook()}>
          Button
        </button>
      </div>
    </div>
  );
}

export default Card;
