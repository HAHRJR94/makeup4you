import React from 'react'

const DevolucionCambio = () => {
  return (
    <div className='row justify-content-center my-5'>
      <div className='col-md-8'>
        <div className='alert alert-primary'>
          <h1 className='display-4 text-center alert-heading'>Devolución y cambio</h1>
          <p className='px-3'>
            Nuestra política de reembolsos no aplica para productos abiertos, dañados,
            golpeados, o sin sello de garantía. Si aceptamos reembolsos y cambios bajo las
            siguientes condiciones: <br /> <br/>
            -Producto recibido no es el producto especificado en compra <br />
            -Producto vino dañado en momento de entrega (se requiere fotografia de
            entrega) <br />
            -Producto fue un regalo y no se utilizó <br />
            <br />
            Si se aplican las condiciones mencionadas de excepciones al reembolso, tiene 1
            semana para hacer reclamo de reembolso desde fecha de entrega, si pasa este
            tiempo no se procesa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DevolucionCambio
