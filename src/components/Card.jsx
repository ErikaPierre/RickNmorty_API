import React, { useState } from "react";

function Card({ image, name, status, species }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function likeCounter() {
    setLike(like + 1);
  }
  function dislikeCounter() {
    setDislike(dislike + 1);
  }
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <em> Status:</em> <strong>{status}</strong>
        </p>
        <p className="card-text">
          <em>Species:</em> <strong>{species}</strong>
        </p>
      </div>
      <div className="votes">
        <div id="Likes">
          <button onClick={likeCounter}>❤️</button>
          <span>{like}</span>
        </div>
        <div id="Dislike">
          <button onClick={dislikeCounter}>🗑️</button>
          <span>{dislike}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
