import './App.css';
import PostList from './features/posts/postList';
import AddPostFrom from './features/posts/addPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Routes,Route, Navigate } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostFrom';
import UsersList from './features/users/usersList';
import UserPage from './features/users/userPage';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostList />} />

      <Route path="post">
        <Route index element={<AddPostFrom />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>
      <Route path="user">
        <Route index element={<UsersList />} />
        <Route path=":userId" element={<UserPage/>} />
      </Route>

      <Route path='*' element={<Navigate to="/"/>}/>

    </Route>
  </Routes>
  );
}

export default App;
