import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function InfosPage() {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();
  const navigate = useNavigate();

  const getOneCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du personnage :",
          error
        );
      });
  };

  useEffect(() => {
    getOneCharacter();
  }, [characterId]);

  if (!character) {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        Retour
      </button>
      <div id="details">
        <h2>{character.name}</h2>
        <div id="infosCharacter">
          <img src={character.image} alt={character.name} />
        </div>
        <hr />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
        <p>Origin: {character.origin.name}</p>
        {/* <p>Episodes: {character.episode}</p> */}
      </div>
    </>
  );
}

export default InfosPage;
