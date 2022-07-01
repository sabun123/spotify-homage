import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['Home__container']}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Home;
