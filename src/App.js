import './App.css';
import PostList from './features/posts/postList';
import AddPostFrom from './features/posts/addPostForm';
function App() {
  return (
    <main className="App">
      <AddPostFrom/>
      <PostList/>
    </main> 
  );
}

export default App;
