import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DataTodoListProvider } from './Context/DataTodoListProvider';

import './Style/Global.css';

ReactDOM.render(
  <DataTodoListProvider>
    <App />
  </DataTodoListProvider>,
  document.getElementById('root')
);
