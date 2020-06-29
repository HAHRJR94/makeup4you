import React, { useContext } from 'react'
// import '../css/lip.css'
import { Link } from 'react-router-dom'
import { ProContext } from '../context/ProContext'

const Lips = () => {
  const { products, carrito, setCarrito } = useContext(ProContext)

  const lips = products.filter(item => item.categoria === 'labios')

  return (
    <section >
      <div className='container-fluid py-5'>
        <div className=' row justify-content-around'>
          {lips.map(product => (
            <div key={product.id} className='card mt-4' style={{ width: 350 }}>
              <img
                src={`/store/${product.image}`}
                alt={product.name}
                className='card-img-top'
                style={{height: 350}}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <h2 className=''>$ {product.price}</h2>
                <Link to={`/info/${product.id}`} className='btn btn-info btn-block'>
                  Ver información
                </Link>
                <button
                  className='btn btn-outline-success btn-block'
                  onClick={() => setCarrito([...carrito, product])}
                >
                  Agregar al carrito
                  <img
                    src='/img/carrito-de-compras.svg'
                    style={{ width: 20, marginLeft: 10 }}
                    alt='carrito'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lips
