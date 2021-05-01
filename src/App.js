import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import './App.scss'
import Footer from './pages/Footer/Footer'
import Services from './pages/Services/Home'
import Products from './pages/Products/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
