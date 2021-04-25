import logo from './logo.svg';
import './App.css';
import Login from './container/Login'
import Register from "./container/Register";
import Home from './container/Home'
import Position from './container/Position'
import Company from './container/Company'
import Positions from './components/Positions';
import Companys from './components/Companys';
import City from './components/City'
import Hobby from './components/Hobby'
import User from './container/User'
import Tianxie from './container/Tianxie';
import TianxieCom from './container/TianxieCom';

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Companyhome from './container/Companyhome'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}

      {/* <Home /> */}
      <Router>
        <Switch>
          {/*  */}
          <Login path='/login'/>
          <Tianxie path='/tianxie'/>
          <TianxieCom path='/tianxieCom'/>
          {/* <Register /> */}
          <Route exact path='/' component={Home} />
          <Route  path='/Companyhome' component={Companyhome} />
          <Route path='/position' component={Position} />
          <Route path='/company' component={Company} />
          <Route path='/position/positions' component={Positions} />
          <Route path='/companyinfo' component={Companys} />
          <Route path='/city' component={City} />
          <Route path='/hobby' component={Hobby} />
          <Route path='/user' component={User} />
          
          {/* <Route exact path='/like' component={Like} />
          <Route exact path='/toudi' component={Toudi} />
          <Route exact path='/connect' component={Connect} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
