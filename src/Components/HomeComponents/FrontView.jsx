import "./FrontView.css";

import HomeUiot from "../../assets/Images/HomeUiot.png";
import { Link } from "react-router-dom";

const FrontView = () => {
  return (
    <div>
      <section className="frontview-section">
        <div className="frontview-container">
          <div className="frontview-content">
            <h1>A maneira universal de conectar as coisas!</h1>
            <p>
              Somos um grupo de pesquisa formado por alunos e professores da
              Universidade de Brasília.
            </p>
            <Link to="About" className="frontview-cta-button">
              Saiba mais
            </Link>
          </div>

          <div className="frontview-image-container">
            <img src={HomeUiot} alt="Ilustração de dispositivos conectados" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontView;
