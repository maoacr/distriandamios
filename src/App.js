import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProductsAndServices from './pages/ProductsAndServices';

const App = () => {
  return (
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/distriandamios" component={AboutUs}/>
          <Route path="/productosyservicios" component={ProductsAndServices}/>
    </Switch>
  );
}

export default App;
