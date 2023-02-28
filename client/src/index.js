import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import BaseLayout from './components/layout/BaseLayout';
import Saved from './components/Saved';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Signout from './components/auth/Signout';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BaseLayout>
      <Switch>
        <Route path='/' element={<App />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signout' element={<Signout />} />
        
      </Switch>
    </BaseLayout>
  </Router>
);

