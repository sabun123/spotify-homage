import {
  FaHeadphonesAlt,
  FaSearch,
  FaHeart,
  FaPlayCircle,
  FaRegChartBar,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = () => {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <div className={styles['Side-Bar__container']}>
      <div className={styles['Side-Bar__profile_container']}>
        <img src='/logo192.png' alt='profile' />
        <p>Bob Smith</p>
      </div>
      <div className={styles['Side-Bar__buttons_container']}>
        <button
          name='Discover'
          style={{
            backgroundColor:
              location.pathname === '/discover' ? '#ffffff40' : 'transparent',
          }}
          onClick={() => navigate('/discover')}
        >
          <FaHeadphonesAlt />
          <p>Discover</p>
        </button>
        <button
          name='Search'
          style={{
            backgroundColor:
              location.pathname === '/search' ? '#ffffff40' : 'transparent',
          }}
          onClick={() => navigate('/search')}
        >
          <FaSearch />
          <p>Search</p>
        </button>
        <button
          name='Favourites'
          style={{
            backgroundColor:
              location.pathname === '/favourites' ? '#ffffff40' : 'transparent',
          }}
          onClick={() => navigate('/favourites')}
        >
          <FaHeart />
          <p>Favourites</p>
        </button>
        <button
          name='Playlists'
          style={{
            backgroundColor:
              location.pathname === '/playlists' ? '#ffffff40' : 'transparent',
          }}
          onClick={() => navigate('/playlists')}
        >
          <FaPlayCircle />
          <p>Playlists</p>
        </button>
        <button
          name='Charts'
          style={{
            backgroundColor:
              location.pathname === '/charts' ? '#ffffff40' : 'transparent',
          }}
          onClick={() => navigate('/charts')}
        >
          <FaRegChartBar />
          <p>Charts</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
