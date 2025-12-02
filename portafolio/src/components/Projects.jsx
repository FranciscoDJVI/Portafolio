import psys1 from "../assets/images/psys_1.webp";
import psys2 from "../assets/images/psys_2.webp";
import psys3 from "../assets/images/psys_3.webp";
import psys4 from "../assets/images/psys_4.webp";
import psys5 from "../assets/images/psys_5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectPersonal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="project-info">
        <div className="project-header">
          <h3>Plataforma de Gestión de Inventario 'Psys'</h3>
          <p>
            Sistema de Gestión de Ventas es una aplicación web completa de gestión de ventas
            desarrollada con <strong>Django REST framework</strong> y <strong>React</strong>.
            Esta plataforma permite administrar productos, stock, ventas y usuarios con diferentes
            roles y permisos.
          </p>
        </div>

        <div className="project-details">
          <div className="project-detail-item">
            <strong>Rol:</strong>
            <span>Desarrollador Principal</span>
          </div>

          <div className="project-detail-item">
            <strong>Duración:</strong>
            <span>1 mes</span>
          </div>

          <div className="project-detail-item technologies">
            <strong>Tecnologías:</strong>
            <div className="badges-container">
              <span className="badge">Python</span>
              <span className="badge">Django REST framework</span>
              <span className="badge">React</span>
              <span className="badge">Javascript</span>
            </div>
          </div>
        </div>

        <div className="project-journey">
          <div className="journey-item">
            <strong>1. El Desafío:</strong>
            <p>
              Simular sistema de registro de inventario y ventas de la empresa donde laboro
              actualmente. Panadería, pero en el área de ventas se utiliza un sistema POS llamado épico.
            </p>
          </div>

          <div className="journey-item">
            <strong>2. La Solución:</strong>
            <p>
              Diseñé y construí un panel de control (dashboard) interactivo en React y en el
              backend utilice Django REST framework.
            </p>
          </div>

          <div className="journey-item">
            <strong>3. Aprendizaje:</strong>
            <p>
              Aprendí el proceso de conectar un frontend y backend creados en tecnologías diferentes.
            </p>
          </div>
        </div>
      </div>


      <div className="project-slider">
        <Slider {...settings}>
          <div className="slide-item">
            <img src={psys1} alt="Dashboard principal de Psys" />
          </div>
          <div className="slide-item">
            <img src={psys2} alt="Gestión de productos en Psys" />
          </div>
          <div className="slide-item">
            <img src={psys3} alt="Control de inventario en Psys" />
          </div>
          <div className="slide-item">
            <img src={psys4} alt="Módulo de ventas en Psys" />
          </div>
          <div className="slide-item">
            <img src={psys5} alt="Reportes y estadísticas en Psys" />
          </div>
        </Slider>
      </div>


      <a
        href="https://github.com/FranciscoDJVI/PSYS.git"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver código del proyecto Psys en GitHub"
        className="project-github-link"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Ver en GitHub</span>
      </a>
    </div>
  );
};
export default ProjectPersonal;
