import React from 'react'

const Nosotros = () => {
  return (
    <div className='row justify-content-center align-items-center my-5'>
      <div className='col-md-8'>
        <div className='alert alert-success'>
          <h1 className='display-2 text-center alert-heading'>Nosotros</h1>
          <hr/>
          <p className='p-4'>
            Nos dedicamos ala venta de cosméticos para el cuidado personal brindándoles
            asesoramientos y tutoríales de cómo aplicar nuestro productos, contamos con
            servicio a domicilio Con maquillistas profesionales cumpliendo las normas de
            bioseguridad para el cuidado de tu salud y tu belleza.
          </p>
          <hr/>
          <h2 className="display-4 alert-heading text-center">
            Misión y Visión
          </h2>
          <h4 className="mt-3 font-weight-bold ml-4">Misión</h4>
          <p className='p-4'>
            Complacer las necesidades de cada mujer hondureña por medio de productos cosméticos y servicios de maquillaje a domicilio con asesoramiento privado.
          </p>
          <h4 className="mt-3 font-weight-bold ml-4">Visión</h4>
          <p className='p-4'>
            Llevar productos cosméticos cumpliendo las normas de seguridad e higiene, hacer trabajos de calidad a nuestros clientes sin poner su vida en riesgo por el virus "covid-19" mediante transmisiones online y servicios a domicilio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
