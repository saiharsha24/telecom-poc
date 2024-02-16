import React from 'react';
import styles from './Home.module.css';
import Otsisuit from '../../assets/images/Otsisuit.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={Otsisuit} alt="Otsisuit" className={styles.img} />
    </div>
  );
};

export default Home;
