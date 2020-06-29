import React from 'react'
import '../css/header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { ProContext } from '../context/ProContext'
import { useEffect } from 'react'

const Header = () => {
  const { carrito } = useContext(ProContext)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(carrito.length)
  }, [carrito])

  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <NavLink className='navbar-brand' to={'/'}>
            <img src='Makeup4You.jpg' style={{ width: 120 }} alt='' />
          </NavLink>
          <h5 className='text-center text-primary'>MakeUp4You</h5>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/'}>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/rostro'}>
                Rostro
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/ojos'}>
                Ojos
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/lips'}>
                Labios
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/cuidado-personal'}>
                Cuidado Personal
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/about'}>
                Nosotros
              </NavLink>
            </li>
            <li className='nav-item ml-5'>
              <NavLink className='nav-link' to={'/contacto'}>
                Contacto
              </NavLink>
            </li>
          </ul>
          <NavLink className='badge badge-pill badge-light nav-link mr-5' to={'/cart'}>
            <img src={`/img/carrito-de-compras.svg`} style={{ width: 30 }} alt='' />
            <h1 className='badge badge-pill badge-dark text-primary ml-2'>{counter}</h1>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
