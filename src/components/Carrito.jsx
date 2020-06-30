import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ProContext } from '../context/ProContext'
import { useEffect } from 'react'

const Carrito = () => {
  const { carrito, setCarrito } = useContext(ProContext)
  const [subtotal, setSubtotal] = useState(0)

  const eliminarProduct = id => {
    const filtro = carrito.filter(x => x.id !== id)

    setCarrito(filtro)
  }

  useEffect(() => {
    if (carrito.length === 0) setSubtotal(0)
    let sub = 0
    for (let i = 0; i < carrito.length; i++) {
      sub = sub + parseInt(carrito[i].price)
    }

    setSubtotal(sub)
  }, [carrito])

  return (
    <section className='p-4'>
      {carrito.length === 0 ? (
        <div className=''>
          <div className='row justify-content-center'>
            <h1 className='display-4 text-center text-primary'>
              Agrega tus productos al carrito
            </h1>
          </div>
          <div className='row justify-content-center'>
            <img src='/img/Empty.svg' style={{ width: 600 }} alt='' />
          </div>
        </div>
      ) : (
        <div>
          {carrito.map(item => (
            <div key={item.id} className='row justify-content-sm-center border mt-2 p-2'>
              <div className='col-md-4'>
                <img src={`/store/${item.image}`} style={{ width: 160 }} alt='' />
              </div>
              <div className='col-md-4 '>
                <h3 className='text-center'>{item.brand}</h3>
                <h4>{item.name}</h4>
                <h4 className='font-weight-bold'>L. {item.price}</h4>
                <p className='font-weight-bold'>cant: </p>
              </div>
              <div
                className='col-md-4 d-flex justify-content-around align-item-center py-5'
                style={{ width: 250, height: 150 }}
              >
                <button
                  className='btn btn-outline-danger px-5'
                  onClick={() => eliminarProduct(item.id)}
                >
                  eliminar &times;
                </button>
              </div>
            </div>
          ))}
          <div className='row justify-content-end p-5'>
            <div className='col-md-4 border p-4'>
              <h4 className='text-primary mr-5 mb-4'>
                Total a pagar: <span className='text-primary ml-5'>L. {subtotal}</span>
              </h4>
              <Link to={'/form-pago'} className='btn btn-success btn-block'>Pagar con Visa/Mastercard</Link>
              <Link to={'/form-paypal'} className='btn btn-warning btn-block' >Pagar con paypal</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Carrito
