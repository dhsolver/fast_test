import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

export default function App() {
  return (
    <Router>
      <AppBar />
      {routes()}
    </Router>
  );
}
