import logo from './logo.svg';
import './App.css';
import Login from './container/Login'
import Home from './container/Home'
import Position from './container/Position'
import Company from './container/Company'
import Positions from './components/Positions';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  exact path='/position' component={Position} />
          <Route  path='/company' component={Company} />
          <Route path='/position/positions' component={Positions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
