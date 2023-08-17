import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { extentendedApiSlice } from './features/posts/postSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchUsers } from './features/users/usersSlice';
store.dispatch(extentendedApiSlice.endpoints.getPosts.initiate())
store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
