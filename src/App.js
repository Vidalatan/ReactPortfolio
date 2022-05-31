import { useContext } from 'react';
import Header from './Pages/GlobalComponents/Header/Header';
import Footer from './Pages/GlobalComponents/Footer/Footer';
import Main from './Pages/Main/Main';
import { ThemeContext } from './ContextProviders/Theme/ThemeContext';
import classify from './utils/classify';

import classes from './App.module.css';


function App() {
  const { currentStyle } = useContext(ThemeContext)

  return (
    <div className={classify(classes.setBackdrop, currentStyle.primarybg)}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
