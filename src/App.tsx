import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import React, { Suspense } from 'react';
import { Container, Spinner } from 'react-bootstrap';
const HomePage = React.lazy(() => import('./pages/HomePage'))
const UsersPage = React.lazy(() => import('./pages/UsersPage'))
const PostsPage = React.lazy(() => import('./pages/PostsPage'))

function App() {
  return (
    <div className="py-3">
      <Nav />
      <Suspense fallback={<Container><Spinner animation="border" variant="primary" /></Container>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='users/' element={<UsersPage />} />
          <Route path='posts/:userId' element={<PostsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
