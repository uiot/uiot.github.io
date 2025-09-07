import React from "react";
import { Link } from "react-router-dom";
import "./TeamView.css";

import IconAvatar from "../../assets/Icons/IconAvatar.svg";
import IconGithub from "../../assets/Icons/IconGithub.svg";
import IconLinkedin from "../../assets/Icons/IconLinkedin.svg";
import IconLattes from "../../assets/Icons/IconLattes.svg";
import IconEmail from "../../assets/Icons/IconEmail.svg";
import IconArrow from "../../assets/Icons/IconArrow.svg";

import { membersData } from "../../Data/TeamData";

const TeamView = () => {
  return (
    <div>
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2>Equipe</h2>
            <p>Nosso time e formado por alunos e professores da UnB</p>
          </div>

          <div className="team-grid">
            {membersData.slice(0, 4).map((member, index) => (
              <div className="team-card" key={index}>
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className="team-avatar"
                />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-status">{member.status}</p>
                <div className="member-socials">
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

          <Link to="/Team" className="see-more-link">
            <span>Conheça o resto da nossa equipe</span>
            <img src={IconArrow} alt="Ver mais" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamView;
