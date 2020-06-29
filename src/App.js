import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Provider from './context/ProContext'

import Header from './components/Header'
import LandingPage from './components/landingPage/LandingPage'
import Rostro from './components/Rostro'
import Form from './components/Form'
import Carrito from './components/Carrito'
import InfoProduct from './components/InfoProduct'
import Lips from './components/Lips'
import Eyes from './components/Eyes'
import CuidadoPersonal from './components/CuidadoPersonal'
import Nosotros from './components/Nosotros'
import Footer from './components/footer/Footer'
import PreguntasFrecuentes from './components/footer/PreguntasFrecuentes'
import PoliticaEnvio from './components/footer/PoliticaEnvio'
import DevolucionCambio from './components/footer/DevolucionCambio'
import Politicas from './components/footer/Politicas'
import FormularioContacto from './components/forms/FormularioContacto'
import FormularioPago from './components/forms/FormularioPago'
import FormPaypal from './components/forms/FormPaypal'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/rostro' component={Rostro} />
          <Route exact path='/lips' component={Lips} />
          <Route exact path='/ojos' component={Eyes} />
          <Route exact path='/cuidado-personal' component={CuidadoPersonal} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/cart' component={Carrito} />
          <Route exact path='/info/:id' component={InfoProduct} />
          <Route exact path='/about' component={Nosotros} />
          <Route exact path='/contacto' component={FormularioContacto}/>
          <Route exact path='/form-pago' component={FormularioPago}/>
          <Route exact path='/form-paypal' component={FormPaypal}/>
          <Route exact path='/q&a' component={PreguntasFrecuentes} />
          <Route exact path='/politica-envio' component={PoliticaEnvio} />
          <Route exact path='/politica-devolucion' component={DevolucionCambio} />
          <Route exact path='/politicas' component={Politicas} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
