import Card from "./Card";

function PresentationText() {
  const titleInfo = "Presentacion";
  const text =
    "Hola, mucho gusto soy ingeniero de sistemas egresado de la Univerisidad del Pacífico en la ciudad de Buenaventura, Valle del Cauca-Colombia. soy un desarrollador Jr, apasionado por el desarrollo y con intensiones de ser excelente cada día.";
  return (
    <div className="presentation-text">
      <Card title={titleInfo} textInfo={text} />
    </div>
  );
}

export default PresentationText;
