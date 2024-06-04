import { Routes, Route, Navigate } from 'react-router-dom';
import GithubPostList from './pages/GithubPostList';
import GithubPostItem from './pages/GithubPostItem';
import { SearchProvider } from './context/SearchContext';
import './App.css';

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path='/users' element={<GithubPostList />} />
        <Route path='/users/:id' element={<GithubPostItem />} />
        <Route path='*' element={<Navigate to='/users' />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
