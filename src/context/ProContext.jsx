import React from 'react';
import { createContext, useState, useEffect } from 'react';
import db from '../db.json'

export const ProContext = createContext()

const Provider = props => {
  const [products, setProducts] = useState([])
  
  let productList = JSON.parse(localStorage.getItem('carrito'))
  if(!productList) productList = []
  
  const [carrito, setCarrito] = useState(productList)

  //Get products
  useEffect(() => {
    const dbProducts = () => {
      const cosmetics = db

      setProducts(cosmetics)
    }

    dbProducts()
  }, [])

  //Carrito de compras
  useEffect(() => {
    if(productList) {
      localStorage.setItem('carrito', JSON.stringify(carrito))
    } else {
      localStorage.setItem('carrito', JSON.stringify([]))
    }

  }, [carrito, productList])

  return (
    <ProContext.Provider value={{
      products,
      carrito,
      setCarrito
    }}>
      { props.children }
    </ProContext.Provider>
  );
};

export default Provider;