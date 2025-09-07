import React, { useState } from "react";
import "./Publications.css";
import iconSearch from "../assets/Icons/iconSearch.svg";
import { allPublications } from "../Data/Publs";

const HighlightMatch = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, "gi");

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = allPublications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(pub.year).includes(searchTerm) ||
      pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <section className="section publications-page">
        <div className="container">
          <div className="publications-page-header">
            <h1>Publicações Uiot</h1>
          </div>

          <div className="search-bar-container">
            <img src={iconSearch} alt="Buscar" className="search-icon" />
            <input
              type="text"
              placeholder="Busque por palavra chave, autor ou ano"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="publication-list">
            {filteredPublications.map((pub, index) => (
              <article key={index} className="publication-entry">
                <h2>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <HighlightMatch text={pub.title} highlight={searchTerm} />
                  </a>
                </h2>
                <p className="publication-meta">
                  Publicado: {""}
                  <HighlightMatch
                    text={pub.year}
                    highlight={searchTerm}
                  />, <HighlightMatch text={pub.venue} highlight={searchTerm} />
                </p>
                <p className="publication-authors">
                  <strong>Autor:</strong> {""}
                  <HighlightMatch text={pub.authors} highlight={searchTerm} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Publications;
