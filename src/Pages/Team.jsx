import React from "react";
import "./Team.css";

import IconAvatar from "../assets/Icons/IconAvatar.svg";
import IconGithub from "../assets/Icons/IconGithub.svg";
import IconLinkedin from "../assets/Icons/IconLinkedin.svg";
import IconLattes from "../assets/Icons/IconLattes.svg";
import IconEmail from "../assets/Icons/IconEmail.svg";

import { coordinatorsData } from "../Data/TeamData";
import { supervisorsData } from "../Data/TeamData";
import { membersData } from "../Data/TeamData";

const Team = () => {
  return (
    <main className="team-page">
      <section className="section team-page-header">
        <div className="container">
          <h1>Nossa equipe</h1>
        </div>
      </section>

      <section className="section team-page-content">
        <div className="container">
          {/* Categoria: Coordenadores */}
          <h2 className="team-category-title">Coordenadores</h2>
          <div className="team-list">
            {coordinatorsData.map((person, index) => (
              <div className="team-list-item" key={`coord-${index}`}>
                <img
                  src={person.avatar}
                  alt={`Avatar de ${person.name}`}
                  className="list-item-avatar"
                />
                <div className="list-item-info">
                  <p className="list-item-name">{person.name}</p>
                  <p className="list-item-title">{person.title}</p>
                  <p className="list-item-role">{person.role}</p>
                </div>
                <div className="list-item-socials">
                  {person.socials.linkedin && (
                    <a href={person.socials.linkedin} target="_blank">
                      <img src={IconLinkedin} alt="LinkedIn" />
                    </a>
                  )}
                  {person.socials.email && (
                    <a href={person.socials.email} target="_blank">
                      <img src={IconEmail} alt="Email" />
                    </a>
                  )}
                  {person.socials.github && (
                    <a href={person.socials.github} target="_blank">
                      <img src={IconGithub} alt="GitHub" />
                    </a>
                  )}
                  {person.socials.lattes && (
                    <a href={person.socials.lattes} target="_blank">
                      <img src={IconLattes} alt="Lattes" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="team-category-title">Supervisores</h2>
          <div className="team-list">
            {supervisorsData.map((person, index) => (
              <div className="team-list-item" key={`sup-${index}`}>
                <img
                  src={person.avatar}
                  alt={`Avatar de ${person.name}`}
                  className="list-item-avatar"
                />
                <div className="list-item-info">
                  <p className="list-item-name">{person.name}</p>
                  <p className="list-item-title">{person.title}</p>
                  <p className="list-item-role">{person.role}</p>
                </div>
                <div className="list-item-socials">
                  {person.socials.linkedin && (
                    <a href={person.socials.linkedin} target="_blank">
                      <img src={IconLinkedin} alt="LinkedIn" />
                    </a>
                  )}
                  {person.socials.email && (
                    <a href={person.socials.email} target="_blank">
                      <img src={IconEmail} alt="Email" />
                    </a>
                  )}
                  {person.socials.github && (
                    <a href={person.socials.github} target="_blank">
                      <img src={IconGithub} alt="GitHub" />
                    </a>
                  )}
                  {person.socials.lattes && (
                    <a href={person.socials.lattes} target="_blank">
                      <img src={IconLattes} alt="Lattes" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="team-category-title">Membros</h2>
          <div className="team-grid">
            {membersData.map((member, index) => (
              <div className="team-member-card" key={`member-${index}`}>
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className="member-card-avatar"
                />
                <h3 className="member-card-name">{member.name}</h3>
                <p className="member-card-role">{member.role}</p>
                <p className="member-card-status">{member.status}</p>
                <div className="member-card-socials">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank">
                      <img src={IconLinkedin} alt="LinkedIn" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a href={member.socials.email} target="_blank">
                      <img src={IconEmail} alt="Email" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank">
                      <img src={IconGithub} alt="GitHub" />
                    </a>
                  )}
                  {member.socials.lattes && (
                    <a href={member.socials.lattes} target="_blank">
                      <img src={IconLattes} alt="Lattes" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
