import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProContext } from '../context/ProContext'

const InfoProduct = props => {
  const { products, carrito, setCarrito } = useContext(ProContext)
  const { id } = useParams()

  const info = products.filter(x => x.id === Number(id))

  return (
    <section className='p-5'>
      {info.map(item => (
        <div key={item.id} className='card '>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img src={`/store/${item.image}`} style={{ width: 400 }} alt='' />
            </div>
            <div className='col-md-8 px-5'>
              <h1 className='display-3 text-center'>{item.brand}</h1>
              <h3 className='text-center'>{item.name}</h3>
              <h3 className='font-weight-bold mt-4 ml-5'>$ {item.price}</h3>
              {/* TODO: Show description */}
              <div className='mt-4 p-5' style={{ width: 300 }}>
                <button
                  className='btn btn-outline-primary btn-block'
                  onClick={() => setCarrito([...carrito, item])}
                >
                  Agregar al carrito
                  <img
                    src='/img/carrito-de-compras.svg'
                    style={{ width: 20, marginLeft: 10 }}
                    alt='carrito'
                  />
                </button>
                <Link to={'/cart'} className='btn btn-success btn-block'>Compralo Ya!</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default InfoProduct
