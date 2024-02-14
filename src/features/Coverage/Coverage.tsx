import React from "react";
import Workin from "./Workin.png";
import styles from "./Coverage.module.css";


const Coverage = () => {
  return (
    <div className={styles.CoverageBody}>
      <img src={Workin} alt="Workin" className={styles.CoverageImage} />
    </div>

  );
};

export default Coverage;