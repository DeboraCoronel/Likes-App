import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LikeList from './components/LikeList';
import LikeDetail from './components/LikeDetail';
import CreateLike from './components/CreateLike';
import EditLike from './components/EditLike';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LikeList />} />
          <Route path="/likes/:id" element={<LikeDetail />} />
          <Route path="likes/new" element={<CreateLike />} />
          <Route path="/likes/:id/edit" element={<EditLike />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
