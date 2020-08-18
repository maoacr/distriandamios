import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Servicios from './pages/Servicios';
import ProductsAndServices from './pages/ProductsAndServices';
import PageAndamioConvencional from './pages/PageAndamioConvencional';
import PageAndamioCertificado from './pages/PageAndamioCertificado';
import PageAndamioColgante from './pages/PageAndamioColgante';
import PageSeccionesYPartes from './pages/PageSeccionesYPartes';
import PageEscaleras from './pages/PageEscaleras';
import PageEscaleraExtension from './pages/PageEscaleraExtension';
import PageEscaleraTijera from './pages/PageEscaleraTijera';

const App = () => {
  return (
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/distriandamios" component={AboutUs}/>
          <Route path="/productos-y-servicios" component={ProductsAndServices}/>
          <Route path="/andamio-convencional" component={PageAndamioConvencional} />
          <Route path="/andamio-certificado" component={PageAndamioCertificado} />
          <Route path="/andamio-colgante" component={PageAndamioColgante} />
          <Route path="/servicios" component={Servicios}  />
          <Route path="/secciones-y-partes" component={PageSeccionesYPartes} />
          <Route path="/escaleras" component={PageEscaleras} />
          <Route path="/escalera-extension" component={PageEscaleraExtension} />
          <Route path="/escalera-tijera" component={PageEscaleraTijera} />
    </Switch>
  );
}

export default App;
