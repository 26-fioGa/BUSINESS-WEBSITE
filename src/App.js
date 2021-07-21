import Landing from './Landing';
import Mineria from './pages/services/Mineria';
import Inmobiliaria from './pages/services/Inmobiliaria';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/mineria" component={Mineria} />
          <Route path="/inmobiliaria" component={Inmobiliaria} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

