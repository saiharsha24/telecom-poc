import React from "react";
import Workin from "../../assets/images/Workin.png";
import styles from "./Assurance.module.css";


const Assurance = () => {
  return (
    <div className={styles.AssuranceBody}>
      <img src={Workin} alt="Workin" className={styles.AssuranceImage} />
    </div>

  );
};

export default Assurance;