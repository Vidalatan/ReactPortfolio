import { useContext, useEffect } from 'react';
import Header from './Pages/GlobalComponents/Header/Header';
import Footer from './Pages/GlobalComponents/Footer/Footer';
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import { ThemeContext } from './ContextProviders/Theme/ThemeContext';
import { RouterContext } from './ContextProviders/Router/RouterContext';
import classify from './utils/classify';
import routePass from './utils/routePass'

import classes from './App.module.css';


function App() {
  const { currentStyle } = useContext(ThemeContext)
  const router = useContext(RouterContext)

  // When active history entry changes, change router context to render appropriately
  window.onpopstate = function(e) {
    (router.location != window.location.pathname && router.setLocation(window.location.pathname))
  }

  return (
    <div className={classify(classes.setBackdrop, currentStyle.primarybg)}>
      <Header />
      {routePass(<Main />)}
      {routePass(<About />, '/about')}
      <Footer />
    </div>
  );
}

export default App;
