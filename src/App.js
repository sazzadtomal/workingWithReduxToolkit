import './App.css';
import PostList from './features/posts/postList';
import AddPostFrom from './features/posts/addPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostFrom';
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

    </Route>
  </Routes>
  );
}

export default App;
