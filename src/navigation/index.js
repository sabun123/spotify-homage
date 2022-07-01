import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/discover'} replace />} />
        <Route path='/' element={<Home />}>
          <Route path='discover' element={<App />} />
          <Route path='search' element={<App />} />
          <Route path='favourites' element={<App />} />
          <Route path='playlists' element={<App />} />
          <Route path='charts' element={<App />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navigation;
