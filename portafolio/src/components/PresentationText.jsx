import Card from "./Card";

function PresentationText() {
  const titleInfo = "Presentacion";
  const text =
    "Hola, bienvenido a mi portafolio.Soy ingeniero de sistemas egresado de la Univerisidad del Pacífico de Buenaventura/Colombia. soy un desarrollador Jr apasionado por la creacion de soluciones de software, con intensiones de conocer cada dia mas sobre la ingenieria de sistemas y del desarrollo de softwarem para aportar mis ideas y dar soluciones a los diferentes problemas que se presentan en nuestas vidas en cuanto a la tecnologia.";
  return (
    <div className="presentation-text">
      <Card title={titleInfo} textInfo={text} />
    </div>
  );
}

export default PresentationText;
