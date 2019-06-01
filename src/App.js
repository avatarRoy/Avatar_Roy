import React from 'react';
import Nav from './Nav';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import routers from './router.js';
import './App.css';

function App() {

  return (
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
  );
}

export default App;
