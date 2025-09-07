import React from "react";
import "./ProjectsView.css";

import iconSecurity from "../../assets/Icons/iconSecurity.svg";
import iconMiddleware from "../../assets/Icons/iconMiddleware.svg";
import iconSoftware from "../../assets/Icons/iconSoftware.svg";
import iconConteiner from "../../assets/Icons/iconConteiner.svg";

const projectsData = [
  {
    icon: iconSecurity,
    title: "Segurança",
    description:
      "Esta é a equipe responsável por criar soluções que permitem um tráfego de dados seguro de ponta a ponta",
  },
  {
    icon: iconMiddleware,
    title: "Hardware",
    description:
      "O setor de hardware do laboratório desenvolve dispositivos para coletar dados do ambiente, utilizando tecnologias como Raspberry Pi, Arduino, sensores e protocolos de comunicação (HTTP, LoRA).",
  },
  {
    icon: iconSoftware,
    title: "Software",
    description:
      "Responsáveis por desenvolver o software e a infraestrutura de soluções IoT, desde a coleta de dados dos dispositivos até a interface final para o usuário.",
  },
  {
    icon: iconConteiner,
    title: "Conteiner",
    description:
      "Empacota a aplicação em um ambiente isolado, garantindo sua implantação rápida, consistente e escalável em qualquer infraestrutura.",
  },
];

const ProjectsView = () => {
  return (
    <div>
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2>Projetos</h2>
            <p>No Uiot desenvolvemos projetos em diversas áreas</p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="project-card-icon"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsView;
