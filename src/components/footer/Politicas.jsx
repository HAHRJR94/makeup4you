import React from 'react'

const Politicas = () => {
  return (
    <div className='row justify-content-center my-5'>
      <div className='col-md-8'>
        <div className='alert alert-success '>
          <h1 className='display-4 text-center alert-heading'>Garantía</h1>
          <p className='px-3'>
            Nuestra garantía de productos incluye una fecha límite de 30 días del momento
            de entrega del producto. Si el producto entregado no cumple con su función
            especificada, se tiene la opción de cambio por el mismo producto o un producto
            de costo similar.
          </p>
          <br />
          <br />
          <h1 className='display-4 text-center alert-heading'>Seguridad</h1> <br />
          <p className='px-3'>
            Nuestra sitio web cuenta con certificado SSL que garantiza que sus datos
            personales están protegidos al momento de realizar una compra. Este
            certificado le ayuda a saber que no está en un sitio falso y puede encriptar
            la información para que no sea rastreada por algún agente externo al sitio. El
            sitio puede pedirle sus datos de carácter personal. Su información no se
            utiliza por terceros.
          </p>
          <br />
          <br />
          <h1 className='display-4 text-center alert-heading'>Privacidad</h1> <br />
          <p className='px-3'>
            Nuestra política de privacidad cumple con todos los estándares básicos de
            seguridad. La información recolectada para una experiencia personalizada no es
            compartida con partes terceras. Toda la información recolectada de su
            trayectoria en nuestro sistema es guardada en el servidor pero no es visible
            para otras personas. Garantizamos el uso únicamente de colección de datos para
            proveer una experiencia basada en sus patronos de compra. Informacion personal
            como nombre y dirección es recolectada para proceso de envío. Esta información
            es eliminada del sistema 1 mes después de la compra realizada.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Politicas
