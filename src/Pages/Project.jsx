import React from "react";
import "./Project.css";

// Importando os ícones
import iconGateway from "../assets/Icons/iconGateway.png";
import iconDims from "../assets/Icons/iconDims.png";
import iconUims from "../assets/Icons/iconUims.png";
import iconDashboardUiot from "../assets/Icons/iconDashboardUiot.png";
import iconDashboardCovid from "../assets/Icons/iconDashboardCovid.png";
import iconUnbSolidaria from "../assets/Icons/iconUnbSolidaria.png";

// Dados dos projetos - AGORA SEM A PROPRIEDADE 'path'
const projectsPageData = [
  {
    icon: iconGateway,
    title: "Gateway",
    description:
      "O Gateway Uiot é a instância da arquitetura responsável pela comunicação entre os dispositivos físicos e o middleware Uiot",
  },
  {
    icon: iconDims,
    title: "DIMS",
    description:
      "O DIMS é uma instância do UioT responsável pelo armazenamento de dados dos dispositivos físicos de forma permanente",
  },
  {
    icon: iconUims,
    title: "UIMS",
    description:
      "O UIMS é o módulo gráfico que se comunica com o DIMS para a recuperação de dados. Aqui é possível filtrar os dados de interesse e visualizar em forma de gráficos",
  },
  {
    icon: iconDashboardUiot,
    title: "Dashbord Uiot",
    description:
      "O Dashboard é o módulo de visualização de dados do banco de dados mas de forma contextual. É possível criar cenários de interesse e incluir dispositivos, bem como interagir com os mesmos, enviando comandos",
  },
  {
    icon: iconDashboardCovid,
    title: "Dashboard Covid",
    description:
      "O Dashboard covid é um projeto desenvolvido pelo laboratório Uiot para combater a pandemia causada pelo covid-19. Ele é o dashboard de monitoramento e serve para analisar os dados enviados pelos usuários e desenvolver ações de saúde geolocalizadas",
  },
  {
    icon: iconUnbSolidaria,
    title: "Unb Solidaria",
    description:
      "Aplicativo desenvolvido para auxiliar na segurança dos alunos da Univesidade de Brasília (UnB). Com este aplicativo, um aluno consegue solicitar para a segurança da universidade momentos que necessite de ajuda, como roteiros de emergência, escolta ou ajudas de saúde",
  },
];

const Project = () => {
  return (
    <main>
      <section className="section project-page">
        <div className="container">
          <div className="project-page-header">
            <h1>Nossos projetos</h1>
          </div>

          <div className="project-page-grid">
            {projectsPageData.map((project, index) => (
              // TROCADO DE <Link> PARA <div
              <div key={index} className="project-page-card">
                <img src={project.icon} alt="" className="project-card-icon" />
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
