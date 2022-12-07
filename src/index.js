import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="https://mujeeb4582.github.io/react-todo-app/">
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
