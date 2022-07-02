import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from 'components/Card';
import styles from './List.module.css';

const List = ({ listData }) => {
  const scrollRef = useRef();

  const { title, data } = listData;
  return (
    <div className={styles['List__container']}>
      <div className={styles['List__container_header']}>
        <p>{title.toUpperCase()}</p>
        <div className={styles['List__line']} />
        <button
          name='left'
          onClick={() => {
            scrollRef.current.scrollLeft -= 120;
          }}
        >
          <FaChevronLeft color='#ffffff' />
        </button>
        <button
          name='right'
          onMouseDown={() => {
            scrollRef.current.scrollLeft += 120;
          }}
        >
          <FaChevronRight color='#ffffff' />
        </button>
      </div>
      <div className={styles['List__card_container']} ref={scrollRef}>
        {data.map((item) => {
          return (
            <Card title={item.name} src={item.images[0].url} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default List;
