import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
import { TodoListPage } from './components/pages/ToDoListPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
  <TodoListPage />
    {/* </React.StrictMode> */}
  </Provider>
);
