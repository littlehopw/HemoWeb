import "../../../src/App.css";
import vectorWhy from '../../assets/vector-why.png';
import { motion } from "framer-motion";

function Why() {
  return (
    <motion.div
      id="why"
      className="max-w-full md:max-w-7xl mx-0 md:mx-auto bg-[var(--light-background-color)] rounded-none md:rounded-[40px] p-10 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 items-center mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center order-1 md:order-2">
        <h2
          className="font-bold text-[var(--primary-color-4)] mb-4 text-center"
          style={{
            fontFamily: 'var(--menu-poppins)',
            fontSize: 'var(--h2-poppins)',
          }}
        >
          Por que doar?
        </h2>
        <h1
          className="font-bold text-[var(--primary-color-5)] mb-4 text-center"
          style={{
            fontFamily: 'var(--menu-poppins)',
            fontSize: 'var(--h4-poppins)',
          }}
        >
          Ajude a salvar vidas!
        </h1>
        <img
          src={vectorWhy}
          alt="Por que doar?"
          className="h-[300px] w-[300px] md:h-[420px] md:w-[420px] block mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="order-2 md:order-1">
        <p
          className="font-normal text-[var(--black)] mb-4"
          style={{
            fontFamily: 'var(--paragraph-poppins)',
            fontSize: 'var(--paragraph-poppins)',
          }}
        >
          A doação de sangue é um ato altruísta e de solidariedade, que ajuda a salvar muitas vidas. É um gesto de amor ao próximo que pode gerar muitos sorrisos.
        </p>
        <h4
          className="font-bold text-[var(--black)] mb-4"
          style={{
            fontFamily: 'var(--h4-poppins)',
            fontSize: 'var(--h4-poppins)',
          }}
        >
          É importante destacar que não há um substituto para o sangue e sua disponibilidade é essencial em diversas situações.
        </h4>
        <p
          className="font-normal text-[var(--black)]"
          style={{
            fontFamily: 'var(--paragraph-poppins)',
            fontSize: 'var(--paragraph-poppins)',
          }}
        >
          Seu consumo é diário e contínuo, já que a transfusão de sangue é necessária em diversas situações, tais como anemias crônicas, cirurgias de urgência, acidentes que causam hemorragias, complicações da dengue, febre amarela, tratamento de câncer e outras doenças graves.
        </p>
      </div>
    </motion.div>
  );
}

export default Why;