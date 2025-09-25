import { motion } from "framer-motion";
import Card from "./Card";

const customP = {
  fontSize: "2rem",
  textAlign: "justify",
};

function PresentationText() {
  const titleInfo = "Presentacion";
  const text =
    "Hola, mucho gusto soy ingeniero de sistemas egresado de la Univerisidad del Pacífico en la ciudad del Buenaventura, Valle del cauca-Colombia. soy un desarrollador Jr, apasionado por el desarrollo y con intensiones de ser un excelente desarrollador cada día.";
  return (
    <div className="presentation-text">
      <Card
        style={customP}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        title={titleInfo}
        textInfo={text}
      />
    </div>
  );
}

export default PresentationText;
