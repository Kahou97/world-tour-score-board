import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import createStore from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return <Core />
}

function Core() {
  const store = createStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
