import { FaSun, FaMoon } from 'react-icons/fa';
import Crowd from 'assets/banner.png';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <div className={styles['Hero-Banner__container']}>
      <img src={Crowd} alt='somethingcool' />
      <div className={styles['Hero-Banner__text']}>
        <p>Your favourite tunes</p>
        <p>
          All <FaSun color='orange' /> and all <FaMoon color='grey' />
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
