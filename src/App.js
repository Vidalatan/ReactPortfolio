import './App.css';
import Header from './Pages/GlobalComponents/Header/Header';
import Footer from './Pages/GlobalComponents/Footer/Footer';
import Main from './Pages/Main/Main';
import ThemeProvider from './Pages/ContextProviders/Theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
