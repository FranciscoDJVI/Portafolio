import React from "react";
import psys1 from "../assets/images/psys_1.jpg";
import psys2 from "../assets/images/psys_2.jpg";
import psys3 from "../assets/images/psys_3.jpg";
import psys4 from "../assets/images/psys_4.jpg";
import psys5 from "../assets/images/psys_5.jpg";
import psys6 from "../assets/images/psys_6.jpg";
import psys7 from "../assets/images/psys_7.jpg";
import psys8 from "../assets/images/psys_8.jpg";
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
      <Slider {...settings} className="slider">
        <p>
          PsysMsql - Sistema de Gestión de Ventas 🛍️PsysMsql es una aplicación
          web completa de gestión de ventas desarrollada con Django que permite
          administrar productos, stock, ventas y usuarios con diferentes roles y
          permisos.;
        </p>
        <div>
          <img src={psys1} alt="psys_1" />
        </div>
        <div>
          <img src={psys2} alt="psys_2" />
        </div>
        <div>
          <img src={psys3} alt="psys_3" />
        </div>
        <div>
          <img src={psys4} alt="psys_4" />
        </div>
        <div>
          <img src={psys5} alt="psys_5" />
        </div>
        <div>
          <img src={psys6} alt="psys_6" />
        </div>
        <div>
          <img src={psys7} alt="psys_7" />
        </div>
        <div>
          <img src={psys8} alt="psys_8" />
        </div>
      </Slider>
      <a
        href="https://github.com/FranciscoDJVI/work-personal"
        target="_blank"
        rel="nooponer noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default ProjectPersonal;
