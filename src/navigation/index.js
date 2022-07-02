import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from 'pages/Home';
import Authorize from 'pages/Authorize';
import Discover from 'pages/Discover';
import NotFound from 'pages/NotFound';

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='authorize' element={<Authorize />} />
          <Route path='discover' element={<Discover />} />
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
