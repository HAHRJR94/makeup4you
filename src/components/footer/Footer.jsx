import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='navbar-fixed-bottom  py-3'>
      <h1 className='ml-4 text-info'>Makeup4You</h1>
      <div className="row justify-content-between">
        <div className="col-md-6 px-5">
          <Link to={'/q&a'} className='text-primary'>Preguntas frecuentes</Link> <br/>
          <Link to={'/contacto'}>Contacto</Link> <br/>
          <Link to={'/politica-envio'} className='text-primary'>Politicas de envío</Link> <br/>
          <Link to={'/politica-devolucion'} className='text-primary'>Politicas de devolucion</Link> <br/>
          <Link to={'/politicas'} className='text-primary'>Politicas</Link> <br/>
        </div>
        <div className="col-md-6">
          <h5>Encuentranos en Facebook</h5>
          <a href='https://www.facebook.com/MakeUp4You-110429047391549'>
            <img src="/img/facebook.png" style={{width: 50}} alt=""/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;