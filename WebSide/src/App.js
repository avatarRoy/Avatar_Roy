import React from 'react';
import Nav from './Nav';
import { renderRoutes } from 'react-router-config';
import { HashRouter ,Switch} from 'react-router-dom';
import routers from './router.js';
import './css/App.css';


function App() {

  return (
    <HashRouter>
    <div class="App">
      <Nav />
      <div class="Main-Page">
        <div class="Main-Content">
            <Switch>
              {renderRoutes(routers)}
            </Switch>
        </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
