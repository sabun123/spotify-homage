import styles from './Loading.module.css';
const Loading = () => {
  return (
    <div className={styles['loader']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
