import React from "react";
import "./About.css";
import aboutBanner from "../assets/Images/aboutBanner.jpg";

const About = () => {
  return (
    <main className="about-page">
      <section
        className="about-hero-section"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="container">
          <h1>A FORMA UNIVERSAL DE AS CONECTAR COISAS</h1>
        </div>
      </section>

      <section className="section about-content-section">
        <div className="container">
          <div className="about-header">
            <h2>Quem somos</h2>
          </div>
          <div className="about-text">
            <p>
              A Internet das Coisas (IoT) é o conceito de conectar objetos
              físicos do dia a dia à internet, permitindo que eles coletem,
              enviem e recebam dados. Basicamente, é dar "inteligência" e
              capacidade de comunicação a itens que tradicionalmente não eram
              digitais. Pense em uma geladeira que avisa no seu celular quando
              um alimento está acabando, um relógio que monitora sua saúde e
              envia relatórios ao seu médico, ou sensores em uma plantação que
              informam o momento exato de irrigar o solo. O objetivo da IoT é
              criar uma ponte entre o mundo físico e o digital, permitindo
              monitorar e controlar objetos remotamente, automatizar tarefas e
              gerar informações valiosas para tornar nossas casas, cidades e
              indústrias mais eficientes, seguras e convenientes.
            </p>
            <p>
              O Laboratório de Pesquisa UIoT é um centro de inovação e
              investigação científica dedicado à Internet das Coisas (IoT),
              sediado na prestigiosa Universidade de Brasília (UnB). Formado por
              uma equipe colaborativa e multidisciplinar de professores,
              pesquisadores e estudantes da UnB, o laboratório tem como missão
              principal aprofundar o conhecimento e explorar novas fronteiras em
              aplicações que impactam diretamente a sociedade. Nosso grande
              diferencial reside na abordagem holística que aplicamos aos nossos
              projetos. No UIoT, não nos limitamos a um único aspecto da
              tecnologia; nós desenvolvemos a solução completa, gerenciando todo
              o ciclo de vida de um produto ou serviço IoT.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
