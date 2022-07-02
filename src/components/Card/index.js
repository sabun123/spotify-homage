import styles from './Card.module.css';

const Card = ({ src, title }) => {
  return (
    <div className={styles['Card__container']}>
      <img src={src} alt='album' />
      <p>{title}</p>
    </div>
  );
};

export default Card;
