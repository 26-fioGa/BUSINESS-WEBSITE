import Landing from './Landing';
import Mineria from './pages/services/Mineria';
import Inmobiliaria from './pages/services/Inmobiliaria';
import Planta from './pages/services/Planta';
import Campamento from './pages/services/Campamento';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/mineria" component={Mineria} />
          <Route path="/inmobiliaria" component={Inmobiliaria} />
          <Route path="/planta" component={Planta} />
          <Route path="/campamento" component={Campamento} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

