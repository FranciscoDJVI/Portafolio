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
        <p aria-label="title project">
          <strong>Título del Proyecto</strong>: Plataforma de Gestión de
          Inventario 'Psys'Sistema de Gestión de Ventas 🛍️PsysMsql es una
          aplicación web completa de gestión de ventas desarrollada con Django
          que permite administrar productos, stock, ventas y usuarios con
          diferentes roles y permisos.
        </p>
        <p aria-label="Rol">
          <strong>Rol:</strong>Desarrollador Principal
        </p>
        <p aria-label="Technologies">
          <strong>Tecnologías:</strong>Python, Django, Javascript, Mysql,
          Celery, Reddit
        </p>
        <p aria-label="Duration">
          <strong>Duración: </strong>7 meses
        </p>
        <p aria-label="Challenge">
          <strong>1. El Desafío:</strong>Simular sistema de registro de
          inventario y ventas de la empresa donde laboro actualmente. Panaderia
          pero en el area de ventas se utilza un sistema POS llamado epico.
          <strong>2.La Solución: </strong> Diseñé y construí un panel de control
          (dashboard) interactivo en django.Implementé una lógica de filtrado
          ajax para la busqueda de prodcutos en la base de datos. y un sistem de
          envio de correo informativo de forma asincrona con celery y reddit al
          realizar una venta. <strong>3. Aprendizaje:</strong> Aprenddi al
          creacion de proyectos con django, la integracion con celery,
          Javascript. conexion a base de datos difente a la predeterminada de
          django.
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
