import React from "react";
import "./ProjectsView.css";

import iconSecurity from "../../assets/Icons/iconSecurity.svg";
import iconMiddleware from "../../assets/Icons/iconMiddleware.svg";
import iconSoftware from "../../assets/Icons/iconSoftware.svg";
import iconConteiner from "../../assets/Icons/iconConteiner.svg";

const projectsData = [
  {
    icon: iconSecurity,
    title: "Segurança Cibernética",
    description:
      "É um time multidisciplinar de pesquisa dedicado ao estudo, desenvolvimento e aplicação de soluções inovadoras para segurança cibernética em redes de Internet das coisas. O principal foco de pesquisa é a identificação, prevenção e mitigação de ataques cibernéticos que afetam dispositivos conectados, sistemas embarcados e infraestruturas críticas baseadas em IoT",
  },
  {
    icon: iconMiddleware,
    title: "Hardware",
    description:
      "Projeta e desenvolve dispositivos IoT para coleta e monitoramento de dados, utilizando tecnologias como Raspberry Pi, Arduino e diversos sensores, além de integrar protocolos de comunicação como HTTP e LoRa para garantir conectividade eficiente."

  },
  {
    icon: iconSoftware,
    title: "Software",
    description:
      "Responsáveis pelo desenvolvimento de software e infraestrutura para soluções IoT, abrangendo desde a coleta de dados nos dispositivos até a apresentação intuitiva das informações na interface do usuário."
  },
];

const ProjectsView = () => {
  return (
    <div>
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2>Projetos</h2>
            <p>No laboratório Uiot desenvolvemos projetos em diversas áreas</p>
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
