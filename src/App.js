// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './Routers';

function App() {
  return (
    <Router>
      <div className="App">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
