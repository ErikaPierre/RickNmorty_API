import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Tabcards() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 6;

  const getAllCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des personnages :",
          error
        );
      });
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  // Update filteredCharacters when filters or search change
  const searchedResults = characters.filter((character) =>
    character.name.toLowerCase().includes(searchedCharacters.toLowerCase())
  );

  const filteredCharacters = searchedResults.filter((character) => {
    if (statusFilter === "alive") return character.status === "Alive";
    if (statusFilter === "dead") return character.status === "Dead";
    return true;
  });

  // Reset current page if filtered characters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchedCharacters]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const clearSearch = () => {
    setSearchedCharacters("");
  };

  return (
    <>
      <div id="title">
        <h1>Rick and Morty API</h1>
      </div>
      {/* Section des filtres */}
      <div className="navigation">
        <div
          className="filter d-grid d-md-flex justify-content"
          id="buttonsFilter"
        >
          <button
            onClick={() => setStatusFilter("all")}
            className={`btn btn-primary ${
              statusFilter === "all" ? "active" : ""
            }`}
            type="button"
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("alive")}
            className={`btn btn-success ${
              statusFilter === "alive" ? "active" : ""
            }`}
            type="button"
          >
            Alive
          </button>
          <button
            onClick={() => setStatusFilter("dead")}
            className={`btn btn-danger ${
              statusFilter === "dead" ? "active" : ""
            }`}
            type="button"
          >
            Dead
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="navbar">
          <div id="searchBar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchedCharacters}
                onChange={(e) => setSearchedCharacters(e.target.value)}
              />
            </form>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={clearSearch}
            ></button>
          </div>
        </div>
      </div>

      {/* Affichage des cartes filtrées */}
      <div className="wrapper">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <div id="grid_Card">
                <Card
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  location={character.location.name}
                  origin={character.origin.name}
                />
              </div>
            </Link>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="btn btn-outline-secondary"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-outline-secondary"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Tabcards;
