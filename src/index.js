import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchPosts } from './features/posts/postSlice';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

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
