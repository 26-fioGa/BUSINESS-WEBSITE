import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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

    // <Router>
    //   <Switch>
    //     <Route path="/home" component={Landing} />
    //     <Route path="/login" component={LoginPage} />
    //   </Switch>
    // </Router>
  );
}

export default App;

