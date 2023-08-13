import './App.css';
import PostList from './features/posts/postList';
import AddPostFrom from './features/posts/addPostForm';
function App() {
  return (
    <main className="App">
      <PostList/>
      <AddPostFrom/>
    </main> 
  );
}

export default App;
