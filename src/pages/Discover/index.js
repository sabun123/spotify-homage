import HeroBanner from 'components/HeroBanner';
import styles from './Discover.module.css';

const Discover = () => {
  return (
    <div className={styles['Discover__container']}>
      <HeroBanner />
      <p>Discover Page</p>
    </div>
  );
};

export default Discover;
