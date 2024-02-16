import React from "react";
import Workin from "../../assets/images/Workin.png";
import styles from "./provisioning.module.css";


const Provisioning = () => {
  return (
    <div className={styles.ProvisioningBody}>
      <img src={Workin} alt="Workin" className={styles.ProvisioningImage} />
    </div>

  );
};

export default Provisioning;
