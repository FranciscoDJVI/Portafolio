import React from "react";
import psys1 from "../assets/images/psys_1.webp";
import psys2 from "../assets/images/psys_2.webp";
import psys3 from "../assets/images/psys_3.webp";
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
      </Slider>
      <a
        href="https://github.com/FranciscoDJVI/work-personal"
        target="_blank"
        rel="nooponer noreferrer"
        aria-label="Read more about proyect Psys"
        alt="Project Psys"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default ProjectPersonal;
