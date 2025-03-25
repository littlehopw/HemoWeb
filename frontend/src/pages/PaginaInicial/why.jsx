import React from "react";
import vectorWhy from "../../assets/vector-why.png";

function Why() {
  return (
    <div className="why-container">
      <div>
        <p>
          A doação de sangue é um ato altruísta e de solidariedade, que ajuda a
          salvar muitas vidas. É um gesto de amor ao próximo que pode gerar
          muitos sorrisos.
        </p>
        <h4>
          É importante destacar que não há um substituto para o sangue e sua
          disponibilidade é essencial em diversas situações.
        </h4>
        <p>
          Seu consumo é diário e contínuo, já que a transfusão de sangue é
          necessária em diversas situações, tais como anemias crônicas,
          cirurgias de urgência, acidentes que causam hemorragias, complicações
          da dengue, febre amarela, tratamento de câncer e outras doenças
          graves.
        </p>
      </div>
      <div>
        <h2>Por que doar?</h2>
        <h1>Ajude a salvar vidas!</h1>
        <img src={vectorWhy} alt="Por que doar?" className="about-image" />
      </div>
    </div>
  );
}

export default Why;