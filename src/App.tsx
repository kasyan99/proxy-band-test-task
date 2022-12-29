import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import UsersPage from './pages/UsersPage';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="pt-5">
      <Routes>
        <Route path='users' element={<UsersPage />} />
        <Route path='posts' element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
