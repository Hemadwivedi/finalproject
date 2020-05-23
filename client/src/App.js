import React from 'react';
import UserPage from './Container/UserPage'
import Cart from './Components/Cart/cart';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={UserPage} />
        <Route exact path="/cart" component={Cart} />

      </div>
    </Router>
  );
}

export default App;
