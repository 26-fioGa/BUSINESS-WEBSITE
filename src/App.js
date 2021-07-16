import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

