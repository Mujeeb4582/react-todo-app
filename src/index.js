import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './componenets/TodoContainer';
// style sheet
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
