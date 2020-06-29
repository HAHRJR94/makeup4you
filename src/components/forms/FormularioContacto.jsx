import React from 'react'

const FormularioContacto = () => {
  return (
    <div className='card py-4'>
      <div className='card-body row justify-content-around'>
        <div className='col-md-6'>
          <h2 className='ml-3'>Contacto</h2>
          <p className='ml-3'>Puedes comunicarte con nosotros para tutorias o servicio a domicilio llenando el siguiente formulario será un placer ayudarte.</p>
          <img src="/img/contactform.svg" className='img-fluid' alt=""/>
        </div>
        <div className='col-md-6'>
          <form className='px-5'>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" placeholder='Tu nombre' className='form-control'/>
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input type="text" placeholder='Tu nombre' className='form-control'/>
            </div>
            <div className="form-group">
              <label>email:</label>
              <input type="emailt" placeholder='Tu nombre' className='form-control'/>
            </div>
            <div className="form-group">
              <label>Telefono:</label>
              <input type="text" placeholder='Tu nombre' className='form-control'/>
            </div>
            <div className="form-group">
              <label>Mensaje:</label>
              <textarea className='form-control'>
              </textarea>
            </div>
            <button className='btn btn-outline-info btn-block'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioContacto
