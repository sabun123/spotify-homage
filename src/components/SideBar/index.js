import {
  FaHeadphonesAlt,
  FaSearch,
  FaHeart,
  FaPlayCircle,
  FaRegChartBar,
} from 'react-icons/fa';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles['Side-Bar__container']}>
      <div className={styles['Side-Bar__profile_container']}>
        <img src='/logo192.png' alt='profile' />
        <p>Bob Smith</p>
      </div>
      <div className={styles['Side-Bar__buttons_container']}>
        <button name='Discover'>
          <FaHeadphonesAlt />
          <p>Discover</p>
        </button>
        <button name='Search'>
          <FaSearch />
          <p>Search</p>
        </button>
        <button name='Favourites'>
          <FaHeart />
          <p>Favourites</p>
        </button>
        <button name='Playlists'>
          <FaPlayCircle />
          <p>Playlists</p>
        </button>
        <button name='Charts'>
          <FaRegChartBar />
          <p>Charts</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
