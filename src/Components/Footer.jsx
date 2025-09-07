import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import IconArrowR from "../assets/Icons/IconArrowR.svg";
import IconInstagram from "../assets/Icons/IconInstagram.svg";
import logo from "../assets/Logos/LogoPurple.png";
import IconLinkedin from "../assets/Icons/IconLinkedin.svg";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-column about">
            <img src={logo} alt="UIOT Logo" className="footer-logo" />
            <p>
              Faculdade de Tecnologia
              <br />
              Departamento de Engenharia elétrica
              <br />
              Email: Uito@uiot.org
            </p>
          </div>

          {/* AS DUAS COLUNAS DE LINKS FORAM UNIFICADAS NESTA ÚNICA COLUNA */}
          <div className="footer-column links">
            <ul>
              <li>
                <Link to="/">
                  <img src={IconArrowR} alt="seta" /> Home
                </Link>
              </li>
              <li>
                <Link to="/About">
                  <img src={IconArrowR} alt="seta" /> Sobre
                </Link>
              </li>
              <li>
                <Link to="/Project">
                  <img src={IconArrowR} alt="seta" /> Projetos
                </Link>
              </li>
              <li>
                <Link to="/Publications">
                  <img src={IconArrowR} alt="seta" /> Publicações
                </Link>
              </li>
              <li>
                <Link to="/Team">
                  <img src={IconArrowR} alt="seta" /> Equipe
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column social">
            <h4>Fique por dentro dos nos projetos</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/uiot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconLinkedin} alt="LinkedIn" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={IconInstagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
