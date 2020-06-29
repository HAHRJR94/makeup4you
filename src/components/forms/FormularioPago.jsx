import React from 'react'
import '../forms/form.css'

const FormularioPago = () => {
  return (
    <section className='row justify-content-center'>
      <div className='col-md-6 '>
        <div className='card my-4'>
          <div className='card-body'>
            <form className='p-5'>
              <legend>Datos personales</legend> <hr />
              <div className='row'>
                <div className='col'>
                  <label>Nombre:</label>
                  <input type='text' placeholder='Nombre' className='form-control' />
                </div>
                <div className='col'>
                  <label>Apellido</label>
                  <input type='text' placeholder='Apellido' className='form-control' />
                </div>
              </div>
              <div className='form-group'>
                <label>Dirección:</label>
                <input type='text' placeholder='Dirección' className='form-control' />
              </div>
              <div className='row'>
                <div className='col'>
                  <label>Teléfono:</label>
                  <input type='text' placeholder='555-555-555' className='form-control' />
                </div>
                <div className='col'>
                  <label>E-mail:</label>
                  <input
                    type='email'
                    placeholder='correo@correo.com'
                    className='form-control'
                  />
                </div>
              </div>
              <legend>Datos de tarjeta</legend> <hr />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Número de la tarjeta'
                  className='form-control'
                />
              </div>
              <p>Válida hasta</p>
              <div className='row'>
                <div className='col'>
                  <input type='number' placeholder='MM' className='form-control' />
                </div>
                /
                <div className='col'>
                  <input type='number' placeholder='AA' className='form-control' />
                </div>
              </div>
              <h6 className='mt-3'>CVC</h6>
              <div className='form-group'>
                <input type='number' placeholder='***' className='form-control' />
              </div>
              <button className='btn btn-success '>Realizar Pago</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormularioPago
