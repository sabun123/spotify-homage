import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/discover' replace />} />
      <Route path='/discover' element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
