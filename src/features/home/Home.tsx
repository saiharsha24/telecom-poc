import React from 'react';
import styles from './Home.module.css';
import Otsisuit from './Otsisuit.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={Otsisuit} alt="Otsisuit" className={styles.img} />
    </div>
  );
};

export default Home;
