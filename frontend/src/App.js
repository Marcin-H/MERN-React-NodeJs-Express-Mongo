import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen} exact></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/login' component={LoginScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
