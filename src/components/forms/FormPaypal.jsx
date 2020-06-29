import React from 'react'

const FormPaypal = () => {
  return (
    <section className='row justify-content-center card py-5'>
      <div className='col-md-4 ml-5'>
        <div className='card my-4'>
          <div className='card-body'>
            <form className='p-4'>
              <div className='form-group'>
                <label>email</label>
                <input
                  type='email'
                  placeholder='correo@paypal.com'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>password</label>
                <input
                  type='password'
                  placeholder='***********'
                  className='form-control'
                />
              </div>
              <button className='btn btn-warning btn-block'>Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormPaypal
