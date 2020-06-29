import React from 'react'
import { Link } from "react-router-dom";
import '../landingPage/landingpage.css'


const LandingPage = () => {
  return (
    <section>
      <div className='card bg-dark text-white'>
        <img src='/img/makeup-copy.jpg' className='cover' alt='' />
        <div className='card-img-overlay'>
          <div className='vh-100 row justify-content-center align-items-center  mr-5'>
            <h1 className='display-3'>Bienvenidos a <span className='display-2'>MakeUp 4 You</span></h1>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <Link to={'/rostro'}><h4 className="text-right mt-5">ver más productos</h4></Link>
        <div className='row justify-content-around mb-5'>
          <div className='card-group '>
            <div className='card'>
              <img src='/store/setting_powder.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>AOA studio perfect - setting powder</h5>
                <p className='card-text'>Precio: $200</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/aceite_facial.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Aceite facial infusionado de Dyptique</h5>
                <p className='card-text'>Precio: $120</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/diamon_cocoon.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Diamond Cocoon Sheer Cream de Natura Bissé</h5>
                <p className='card-text'>Precio: $135</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/ojos'}><h4 className="text-right mt-5">ver más productos</h4></Link>
        <div className='row justify-content-around mb-5'>
          <div className='card-group '>
            <div className='card'>
              <img src='/store/powder-gel.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Eyebrow powder & gel de Prolux</h5>
                <p className='card-text'>Precio: $100</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/dual-eyeliner.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Mac dual ended eyeliner</h5>
                <p className='card-text'>Precio: $120</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/definidor_de_cejas.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Definidor de cejas de Anastasia Beverly Hills</h5>
                <p className='card-text'>Precio: $100</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/labios'}><h4 className="text-right mt-5">ver más productos</h4></Link>
        <div className='row justify-content-around mb-5'>
          <div className='card-group '>
            <div className='card'>
              <img src='/store/lip-gloss.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Hudabeauty lip gloss</h5>
                <p className='card-text'>Precio: $80</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/Maybeline-Baby-Lips.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Maybeline Baby Lips</h5>
                <p className='card-text'>Precio: $80</p>
              </div>
            </div>
            <div className='card'>
              <img src="/store/Burt's-Bees-Natural-Lip-Balm.jpg" className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Burt's Bees 100% Natural Lip Balm</h5>
                <p className='card-text'>Precio: $90</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/cuidado-perdonal'}><h4 className="text-right mt-5">ver más productos</h4></Link>
        <div className='row justify-content-around mb-5'>
          <div className='card-group '>
            <div className='card'>
              <img src='/store/CeraVe-Moisturizing-Cream.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>CeraVe Moisturizing Cream</h5>
                <p className='card-text'>Precio: $200</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/Cetaphil-Rich-Hydrating-Night-Cream.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Cetaphil Rich Hydrating Night Cream</h5>
                <p className='card-text'>Precio: $150</p>
              </div>
            </div>
            <div className='card'>
              <img src='/store/Neutrogena-Hydro-Boost.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Neutrogena Hydro Boost</h5>
                <p className='card-text'>Precio: $120</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
